const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '..', 'public', 'models');
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

const items = [
  { in: 'Thermometer.glb', out: 'thermometer.glb', ratio: 0.12 },
  { in: 'PILLE.glb', out: 'pill.glb', ratio: 0.1 },
  { in: 'checklist.glb', out: 'checklist.glb', ratio: 0.1 },
  { in: 'medical_shield.glb', out: 'shield.glb', ratio: 0.1 },
  { in: 'ECG.glb', out: 'ecg.glb', ratio: 0.1 },
  { in: 'Syringe.glb', out: 'syringe.glb', ratio: 0.1 },
  { in: 'virus.glb', out: 'virus.glb', ratio: 0.1 }
];

items.forEach(item => {
  const inPath = path.join(__dirname, '..', 'public', item.in);
  const outPath = path.join(modelsDir, item.out);
  console.log(`Optimizing ${item.in} -> ${item.out}...`);
  const cmd = `npx @gltf-transform/cli optimize "${inPath}" "${outPath}" --simplify true --simplify-ratio ${item.ratio} --texture-size 1024 --texture-compress webp --compress false`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    const stat = fs.statSync(outPath);
    console.log(`Done: ${item.out} (${(stat.size / (1024 * 1024)).toFixed(2)} MB)\n`);
  } catch (err) {
    console.error(`Error optimizing ${item.in}:`, err.message);
  }
});

console.log('All models optimized successfully!');
