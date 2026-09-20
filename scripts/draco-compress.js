const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '..', 'public', 'models');
const models = [
  'checklist.glb',
  'ecg.glb',
  'pill.glb',
  'shield.glb',
  'syringe.glb',
  'thermometer.glb',
  'virus.glb'
];

models.forEach(modelName => {
  const filePath = path.join(modelsDir, modelName);
  const tempPath = path.join(modelsDir, `temp_${modelName}`);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  const initialStat = fs.statSync(filePath);
  console.log(`Compressing ${modelName} (${(initialStat.size / (1024 * 1024)).toFixed(2)} MB)...`);

  try {
    execSync(`npx @gltf-transform/cli draco "${filePath}" "${tempPath}"`, { stdio: 'inherit' });
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);
    const finalStat = fs.statSync(filePath);
    console.log(`Success ${modelName}: ${(finalStat.size / (1024 * 1024)).toFixed(2)} MB\n`);
  } catch (err) {
    console.error(`Error compressing ${modelName}:`, err.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
});

// Remove temp pill_draco if left over
const leftover = path.join(modelsDir, 'pill_draco.glb');
if (fs.existsSync(leftover)) fs.unlinkSync(leftover);

console.log('All models compressed with Draco!');
