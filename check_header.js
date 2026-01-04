import fs from 'fs';
import path from 'path';

const file = process.argv[2] || 'src/assets/logo-zafir-pro.png';
const p = path.join(process.cwd(), file);

try {
    const buf = fs.readFileSync(p);
    console.log(`File: ${file}`);
    console.log(`Size: ${buf.length}`);
    console.log('First 8 bytes:', buf.subarray(0, 8).toString('hex'));
} catch (e) {
    console.error(e);
}
