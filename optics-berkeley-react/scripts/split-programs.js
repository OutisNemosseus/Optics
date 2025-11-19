// Script to split programs.js into organized structure
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the programs file
const programsPath = path.join(__dirname, '../src/data/programs.js');
const programsFileUrl = pathToFileURL(programsPath).href;

// Parse the programs (using dynamic import with proper URL)
const programsModule = await import(programsFileUrl);
const programs = programsModule.programs;

console.log(`Total programs: ${programs.length}`);

// Analyze categories and chapters
const categories = {};
programs.forEach(program => {
  const source = program.source || 'unknown';
  const category = program.category || 'uncategorized';
  const chapter = program.chapter || 'no-chapter';

  if (!categories[source]) {
    categories[source] = {};
  }
  if (!categories[source][category]) {
    categories[source][category] = {};
  }
  if (!categories[source][category][chapter]) {
    categories[source][category][chapter] = [];
  }

  categories[source][category][chapter].push(program);
});

console.log('\nStructure:');
Object.keys(categories).forEach(source => {
  console.log(`\n${source.toUpperCase()}:`);
  Object.keys(categories[source]).forEach(category => {
    console.log(`  ${category}:`);
    Object.keys(categories[source][category]).forEach(chapter => {
      const count = categories[source][category][chapter].length;
      console.log(`    Chapter ${chapter}: ${count} programs`);
    });
  });
});

// Create directory structure
const dataDir = path.join(__dirname, '../src/data');

// Create folders for each source type
Object.keys(categories).forEach(source => {
  const sourceDir = path.join(dataDir, source);
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }

  const sourcePrograms = [];

  Object.keys(categories[source]).forEach(category => {
    // Sanitize category name for filename
    const categorySlug = category
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    Object.keys(categories[source][category]).forEach(chapter => {
      const chapterPrograms = categories[source][category][chapter];
      const filename = `${categorySlug}-chapter-${chapter}.js`;
      const filepath = path.join(sourceDir, filename);

      // Create file content
      const fileContent = `// ${category} - Chapter ${chapter}
// ${chapterPrograms.length} programs

export const programs = ${JSON.stringify(chapterPrograms, null, 2)};
`;

      fs.writeFileSync(filepath, fileContent, 'utf-8');
      console.log(`\nCreated: ${filepath}`);

      sourcePrograms.push(...chapterPrograms);
    });
  });

  // Create index file for source
  const indexPath = path.join(sourceDir, 'index.js');
  const indexContent = `// Auto-generated index for ${source} programs

${Object.keys(categories[source]).map(category => {
  const categorySlug = category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  const varName = categorySlug.replace(/-/g, '_');

  return Object.keys(categories[source][category]).map(chapter => {
    const filename = `${categorySlug}-chapter-${chapter}.js`;
    return `import { programs as ${varName}_ch${chapter} } from './${filename}';`;
  }).join('\n');
}).join('\n')}

export const programs = [
${Object.keys(categories[source]).map(category => {
  const categorySlug = category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  const varName = categorySlug.replace(/-/g, '_');

  return Object.keys(categories[source][category]).map(chapter => {
    return `  ...${varName}_ch${chapter}`;
  }).join(',\n');
}).join(',\n')}
];
`;

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log(`Created index: ${indexPath}`);
});

// Create main index.js
const mainIndexPath = path.join(dataDir, 'index.js');
const mainIndexContent = `// Auto-generated main index for all programs

${Object.keys(categories).map(source => {
  return `import { programs as ${source}Programs } from './${source}/index.js';`;
}).join('\n')}

export const programs = [
${Object.keys(categories).map(source => {
  return `  ...${source}Programs`;
}).join(',\n')}
];

// Export by source type
${Object.keys(categories).map(source => {
  return `export { ${source}Programs };`;
}).join('\n')}
`;

fs.writeFileSync(mainIndexPath, mainIndexContent, 'utf-8');
console.log(`\nCreated main index: ${mainIndexPath}`);

console.log('\n✅ Program reorganization complete!');
