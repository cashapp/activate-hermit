const { execFileSync } = require('child_process');
const { getInput } = require('@actions/core');
const { join } = require('path');
const { writeFileSync } = require('fs');

const working_directory = getInput('working-directory', {
    required: true
});
const hermit_binary = join('bin', 'hermit');
const hermit_env = execFileSync(hermit_binary, ['env', '--raw'], {
    cwd: working_directory,
}).toString();
writeFileSync(process.env['GITHUB_ENV'], hermit_env, {
    flag: 'a'
});
