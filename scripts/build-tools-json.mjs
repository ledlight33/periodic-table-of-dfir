// Generates tools.json from the single source of truth (script.js).
// Run after any tool data change:  node scripts/build-tools-json.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'script.js'), 'utf8');

// Evaluate only the data declarations (everything before the runtime section)
const cut = src.indexOf('// State');
if (cut === -1) throw new Error('Could not find data/runtime boundary marker "// State" in script.js');
const data = new Function(src.slice(0, cut) + '; return { CATEGORIES, OS_LABELS, ELEMENTS, LICENSE };')();

const out = {
    meta: {
        name: 'The Periodic Table of DFIR',
        author: 'Marino Bekios',
        homepage: 'https://ledlight33.github.io/periodic-table-of-dfir/',
        repository: 'https://github.com/ledlight33/periodic-table-of-dfir',
        license: 'Data: CC BY-NC 4.0 - attribution required, no commercial use without permission',
        toolCount: data.ELEMENTS.length,
        generated: new Date().toISOString().slice(0, 10)
    },
    categories: data.CATEGORIES,
    licenses: data.LICENSE,
    platforms: data.OS_LABELS,
    tools: data.ELEMENTS.map(e => ({
        number: e.n,
        symbol: e.s,
        name: e.name,
        category: e.cat,
        license: e.l,
        platforms: e.os,
        url: e.url,
        description: e.d,
        ...(e.install ? { install: e.install } : {}),
        synthetic: e.cat === 'ai' || undefined
    }))
};

writeFileSync(join(root, 'tools.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`tools.json written - ${out.tools.length} tools`);
