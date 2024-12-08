const { execSync } = require('child_process');

try{
  execSync('rm -rf docs');
} catch(e) {}

execSync('npx next build');
execSync('mv out docs');

process.env['NEXT_BUILD_LOC'] = 'zh';
execSync('mv public public2');
execSync('npx next build');
execSync('mv public2 public');
execSync('mv out docs/zh');

