#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(`filepath1: ${filepath1}, filepath2: ${filepath2}`);
  });

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('$ gendiff -f plain before.json after.json');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

