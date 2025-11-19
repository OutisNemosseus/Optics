// Script to add descriptive names and tags to programs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Enhanced program descriptions and tags based on code analysis
const programEnhancements = {
  // Geometrical Optics
  'G10TINPOS': {
    name: 'Positive Thin Lens - Image Position',
    tags: ['lens', 'positive-lens', 'focal-length', 'thin-lens', 'image-position']
  },
  'G12TINNEG': {
    name: 'Negative Thin Lens - Image Position',
    tags: ['lens', 'negative-lens', 'focal-length', 'thin-lens', 'image-position']
  },
  'G14TINFOC': {
    name: 'Thin Lens Focal Length Calculator',
    tags: ['lens', 'focal-length', 'refractive-index', 'thin-lens', 'curvature']
  },
  'G1FERMAT': {
    name: "Fermat's Principle - Travel Time",
    tags: ['fermat-principle', 'optical-path', 'travel-time', 'refraction']
  },
  'G2FERMAT': {
    name: "Fermat's Principle - Multi-Medium Path",
    tags: ['fermat-principle', 'optical-path', 'multi-medium', '3d-visualization']
  },
  'G30MIRCV': {
    name: 'Concave Mirror - Image Formation',
    tags: ['mirror', 'concave-mirror', 'reflection', 'image-formation']
  },
  'G31MIRCX': {
    name: 'Convex Mirror - Image Formation',
    tags: ['mirror', 'convex-mirror', 'reflection', 'image-formation']
  }
};

// Function to generate tags from program content
function generateTagsFromContent(program) {
  const tags = new Set();

  // Add chapter tag
  if (program.chapter) {
    tags.add(`chapter${program.chapter}`);
  }

  // Add category-based tags
  if (program.category) {
    const categoryLower = program.category.toLowerCase();
    if (categoryLower.includes('geometrical')) tags.add('geometrical-optics');
    if (categoryLower.includes('interference')) tags.add('interference');
    if (categoryLower.includes('diffraction')) tags.add('diffraction');
    if (categoryLower.includes('coherence')) tags.add('coherence');
    if (categoryLower.includes('matrix')) tags.add('matrix-methods');
    if (categoryLower.includes('fourier')) tags.add('fourier-transform');
    if (categoryLower.includes('wavefront')) tags.add('wavefront-analysis');
    if (categoryLower.includes('aberration')) tags.add('aberrations');
    if (categoryLower.includes('light source')) tags.add('light-sources');
    if (categoryLower.includes('optical material')) tags.add('optical-materials');
  }

  // Analyze code content for additional tags
  const code = (program.pythonCode || '') + ' ' + (program.matlabCode || '');
  const codeLower = code.toLowerCase();

  // Optical elements
  if (codeLower.includes('lens')) tags.add('lens');
  if (codeLower.includes('mirror')) tags.add('mirror');
  if (codeLower.includes('prism')) tags.add('prism');
  if (codeLower.includes('grating')) tags.add('grating');
  if (codeLower.includes('slit')) tags.add('slit');
  if (codeLower.includes('aperture')) tags.add('aperture');

  // Phenomena
  if (codeLower.includes('diffraction')) tags.add('diffraction');
  if (codeLower.includes('interference')) tags.add('interference');
  if (codeLower.includes('reflection')) tags.add('reflection');
  if (codeLower.includes('refraction')) tags.add('refraction');
  if (codeLower.includes('polarization')) tags.add('polarization');
  if (codeLower.includes('dispersion')) tags.add('dispersion');

  // Calculations
  if (codeLower.includes('focal')) tags.add('focal-length');
  if (codeLower.includes('wavelength')) tags.add('wavelength');
  if (codeLower.includes('intensity')) tags.add('intensity');
  if (codeLower.includes('phase')) tags.add('phase');
  if (codeLower.includes('amplitude')) tags.add('amplitude');
  if (codeLower.includes('frequency')) tags.add('frequency');

  // Patterns/Visualizations
  if (codeLower.includes('fringe')) tags.add('fringe-pattern');
  if (codeLower.includes('pattern')) tags.add('pattern');
  if (codeLower.includes('contour')) tags.add('contour-plot');
  if (codeLower.includes('3d') || codeLower.includes('mesh') || codeLower.includes('surface')) {
    tags.add('3d-visualization');
  }

  // Mathematical methods
  if (codeLower.includes('fourier')) tags.add('fourier-transform');
  if (codeLower.includes('fft')) tags.add('fft');
  if (codeLower.includes('matrix')) tags.add('matrix-methods');
  if (codeLower.includes('convolution')) tags.add('convolution');

  // Light properties
  if (codeLower.includes('coherence')) tags.add('coherence');
  if (codeLower.includes('gaussian')) tags.add('gaussian-beam');
  if (codeLower.includes('laser')) tags.add('laser');

  return Array.from(tags);
}

// Function to improve program name
function improveProgramName(program) {
  const id = program.id || '';
  const title = program.title || '';

  // Check for predefined enhancement
  for (const [key, enhancement] of Object.entries(programEnhancements)) {
    if (id.includes(key) || title.includes(key)) {
      return enhancement.name;
    }
  }

  // Generate name from code comments
  const matlabCode = program.matlabCode || '';
  const lines = matlabCode.split('\n');
  const comments = lines
    .filter(line => line.trim().startsWith('%'))
    .map(line => line.replace('%', '').trim())
    .filter(line => line.length > 3 && line.length < 100);

  if (comments.length > 0) {
    return comments[0];
  }

  // Fallback to existing title without the ID prefix
  return title.replace(/^[A-Z0-9]+\s*-\s*/, '').trim();
}

// Process all program files
async function enhanceAllPrograms() {
  const matlabDir = path.join(__dirname, '../src/data/matlab');
  const files = fs.readdirSync(matlabDir)
    .filter(f => f.endsWith('.js') && f !== 'index.js');

  console.log(`Processing ${files.length} files...`);

  for (const file of files) {
    const filePath = path.join(matlabDir, file);
    const fileUrl = pathToFileURL(filePath).href;

    // Import the module
    const module = await import(fileUrl + '?t=' + Date.now());
    const programs = module.programs;

    console.log(`\nProcessing ${file}: ${programs.length} programs`);

    // Enhance each program
    const enhancedPrograms = programs.map(program => {
      const enhancedName = improveProgramName(program);
      const autoTags = generateTagsFromContent(program);

      // Check for predefined tags
      let predefinedTags = [];
      for (const [key, enhancement] of Object.entries(programEnhancements)) {
        if ((program.id || '').includes(key) || (program.title || '').includes(key)) {
          predefinedTags = enhancement.tags || [];
          break;
        }
      }

      // Combine tags (predefined + auto-generated, unique)
      const allTags = [...new Set([...predefinedTags, ...autoTags])];

      return {
        ...program,
        displayName: enhancedName,
        tags: allTags
      };
    });

    // Write back to file
    const header = `// ${enhancedPrograms[0].category} - Chapter ${enhancedPrograms[0].chapter}\n// ${enhancedPrograms.length} programs\n\n`;
    const content = header + 'export const programs = ' + JSON.stringify(enhancedPrograms, null, 2) + ';\n';

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Enhanced ${file}`);
  }

  console.log('\n✅ All programs enhanced!');
}

enhanceAllPrograms().catch(console.error);
