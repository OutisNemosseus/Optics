// Script to add Wikipedia links to programs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Wikipedia link mappings based on tags and keywords
const wikiLinkMap = {
  // Optical elements
  'lens': { title: 'Lens (optics)', url: 'https://en.wikipedia.org/wiki/Lens_(optics)' },
  'positive-lens': { title: 'Converging lens', url: 'https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses' },
  'negative-lens': { title: 'Diverging lens', url: 'https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses' },
  'thin-lens': { title: 'Thin lens', url: 'https://en.wikipedia.org/wiki/Thin_lens' },
  'mirror': { title: 'Mirror', url: 'https://en.wikipedia.org/wiki/Mirror' },
  'concave-mirror': { title: 'Curved mirror', url: 'https://en.wikipedia.org/wiki/Curved_mirror' },
  'convex-mirror': { title: 'Curved mirror', url: 'https://en.wikipedia.org/wiki/Curved_mirror' },
  'prism': { title: 'Prism (optics)', url: 'https://en.wikipedia.org/wiki/Prism_(optics)' },
  'grating': { title: 'Diffraction grating', url: 'https://en.wikipedia.org/wiki/Diffraction_grating' },
  'slit': { title: 'Diffraction', url: 'https://en.wikipedia.org/wiki/Diffraction' },
  'aperture': { title: 'Aperture', url: 'https://en.wikipedia.org/wiki/Aperture' },

  // Phenomena
  'diffraction': { title: 'Diffraction', url: 'https://en.wikipedia.org/wiki/Diffraction' },
  'interference': { title: 'Wave interference', url: 'https://en.wikipedia.org/wiki/Wave_interference' },
  'reflection': { title: 'Reflection (physics)', url: 'https://en.wikipedia.org/wiki/Reflection_(physics)' },
  'refraction': { title: 'Refraction', url: 'https://en.wikipedia.org/wiki/Refraction' },
  'polarization': { title: 'Polarization (waves)', url: 'https://en.wikipedia.org/wiki/Polarization_(waves)' },
  'dispersion': { title: 'Dispersion (optics)', url: 'https://en.wikipedia.org/wiki/Dispersion_(optics)' },

  // Properties
  'focal-length': { title: 'Focal length', url: 'https://en.wikipedia.org/wiki/Focal_length' },
  'wavelength': { title: 'Wavelength', url: 'https://en.wikipedia.org/wiki/Wavelength' },
  'intensity': { title: 'Intensity (physics)', url: 'https://en.wikipedia.org/wiki/Intensity_(physics)' },
  'phase': { title: 'Phase (waves)', url: 'https://en.wikipedia.org/wiki/Phase_(waves)' },
  'amplitude': { title: 'Amplitude', url: 'https://en.wikipedia.org/wiki/Amplitude' },
  'frequency': { title: 'Frequency', url: 'https://en.wikipedia.org/wiki/Frequency' },
  'refractive-index': { title: 'Refractive index', url: 'https://en.wikipedia.org/wiki/Refractive_index' },

  // Categories
  'geometrical-optics': { title: 'Geometrical optics', url: 'https://en.wikipedia.org/wiki/Geometrical_optics' },
  'coherence': { title: 'Coherence (physics)', url: 'https://en.wikipedia.org/wiki/Coherence_(physics)' },
  'fourier-transform': { title: 'Fourier transform', url: 'https://en.wikipedia.org/wiki/Fourier_transform' },
  'wavefront-analysis': { title: 'Wavefront', url: 'https://en.wikipedia.org/wiki/Wavefront' },
  'aberrations': { title: 'Optical aberration', url: 'https://en.wikipedia.org/wiki/Optical_aberration' },

  // Principles
  'fermat-principle': { title: "Fermat's principle", url: 'https://en.wikipedia.org/wiki/Fermat%27s_principle' },
  'optical-path': { title: 'Optical path length', url: 'https://en.wikipedia.org/wiki/Optical_path_length' },

  // Patterns
  'fringe-pattern': { title: 'Interference (wave propagation)', url: 'https://en.wikipedia.org/wiki/Interference_(wave_propagation)' },

  // Methods
  'fft': { title: 'Fast Fourier transform', url: 'https://en.wikipedia.org/wiki/Fast_Fourier_transform' },
  'matrix-methods': { title: 'Ray transfer matrix analysis', url: 'https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis' },
  'convolution': { title: 'Convolution', url: 'https://en.wikipedia.org/wiki/Convolution' },

  // Light
  'laser': { title: 'Laser', url: 'https://en.wikipedia.org/wiki/Laser' },
  'gaussian-beam': { title: 'Gaussian beam', url: 'https://en.wikipedia.org/wiki/Gaussian_beam' },

  // General optics
  'image-formation': { title: 'Image formation', url: 'https://en.wikipedia.org/wiki/Image_formation' },
  'curvature': { title: 'Radius of curvature', url: 'https://en.wikipedia.org/wiki/Radius_of_curvature' }
};

// Additional context-based Wikipedia links
const categoryWikiLinks = {
  'Optics - Geometrical': [
    { title: 'Geometrical optics', url: 'https://en.wikipedia.org/wiki/Geometrical_optics' },
    { title: 'Ray tracing', url: 'https://en.wikipedia.org/wiki/Ray_tracing_(physics)' }
  ],
  'Optics - Interference': [
    { title: 'Wave interference', url: 'https://en.wikipedia.org/wiki/Wave_interference' },
    { title: "Young's double-slit experiment", url: 'https://en.wikipedia.org/wiki/Double-slit_experiment' }
  ],
  'Optics - Diffraction': [
    { title: 'Diffraction', url: 'https://en.wikipedia.org/wiki/Diffraction' },
    { title: 'Fraunhofer diffraction', url: 'https://en.wikipedia.org/wiki/Fraunhofer_diffraction' },
    { title: 'Fresnel diffraction', url: 'https://en.wikipedia.org/wiki/Fresnel_diffraction' }
  ],
  'Optics - Coherence': [
    { title: 'Coherence (physics)', url: 'https://en.wikipedia.org/wiki/Coherence_(physics)' },
    { title: 'Coherence length', url: 'https://en.wikipedia.org/wiki/Coherence_length' }
  ],
  'Optics - Matrix Methods': [
    { title: 'Ray transfer matrix analysis', url: 'https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis' },
    { title: 'ABCD matrix', url: 'https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis' }
  ],
  'Optics - Fourier Transform': [
    { title: 'Fourier optics', url: 'https://en.wikipedia.org/wiki/Fourier_optics' },
    { title: 'Fourier transform', url: 'https://en.wikipedia.org/wiki/Fourier_transform' }
  ],
  'Optics - Wavefront Analysis': [
    { title: 'Wavefront', url: 'https://en.wikipedia.org/wiki/Wavefront' },
    { title: 'Wavefront sensor', url: 'https://en.wikipedia.org/wiki/Wavefront_sensor' }
  ],
  'Optics - Aberrations': [
    { title: 'Optical aberration', url: 'https://en.wikipedia.org/wiki/Optical_aberration' },
    { title: 'Spherical aberration', url: 'https://en.wikipedia.org/wiki/Spherical_aberration' },
    { title: 'Chromatic aberration', url: 'https://en.wikipedia.org/wiki/Chromatic_aberration' }
  ],
  'Optics - Light Sources': [
    { title: 'Light source', url: 'https://en.wikipedia.org/wiki/Light_source' },
    { title: 'Laser', url: 'https://en.wikipedia.org/wiki/Laser' }
  ],
  'Optics - Optical Materials': [
    { title: 'Optical materials', url: 'https://en.wikipedia.org/wiki/Optical_materials' },
    { title: 'Refractive index', url: 'https://en.wikipedia.org/wiki/Refractive_index' }
  ]
};

// Generate Wikipedia links for a program
function generateWikiLinks(program) {
  const links = new Set();
  const linkObjects = [];

  // Add links based on tags
  if (program.tags && Array.isArray(program.tags)) {
    program.tags.forEach(tag => {
      if (wikiLinkMap[tag]) {
        const key = `${wikiLinkMap[tag].title}|${wikiLinkMap[tag].url}`;
        if (!links.has(key)) {
          links.add(key);
          linkObjects.push(wikiLinkMap[tag]);
        }
      }
    });
  }

  // Add category-specific links
  if (program.category && categoryWikiLinks[program.category]) {
    categoryWikiLinks[program.category].forEach(link => {
      const key = `${link.title}|${link.url}`;
      if (!links.has(key)) {
        links.add(key);
        linkObjects.push(link);
      }
    });
  }

  // Add general optics link if no links found
  if (linkObjects.length === 0) {
    linkObjects.push({ title: 'Optics', url: 'https://en.wikipedia.org/wiki/Optics' });
  }

  return linkObjects;
}

// Process all program files
async function addWikiLinksToPrograms() {
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

    // Add Wikipedia links to each program
    const enhancedPrograms = programs.map(program => {
      const wikiLinks = generateWikiLinks(program);

      return {
        ...program,
        wikipediaLinks: wikiLinks
      };
    });

    // Write back to file
    const header = `// ${enhancedPrograms[0].category} - Chapter ${enhancedPrograms[0].chapter}\n// ${enhancedPrograms.length} programs\n\n`;
    const content = header + 'export const programs = ' + JSON.stringify(enhancedPrograms, null, 2) + ';\n';

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Added Wikipedia links to ${file}`);
  }

  console.log('\n✅ All programs updated with Wikipedia links!');
}

addWikiLinksToPrograms().catch(console.error);
