const { execSync } = require('child_process');

try{
  execSync('rm -rf docs');
} catch(e) {}

execSync('cd en && npm run build');
execSync('mv en/out docs');

execSync('cd zh && npm run build');
execSync('mv zh/out docs/zh');

