const program = require('commander');
const validator = require('./src/utilities/validator');
let compiler = require('./src/compiler');

program
	.version(require('./package.json').version, '-v, --version', 'output the current version')
	.usage('<file> [options]')
	.arguments('<file>')
	.action(function (inFile) {
		fileValue = inFile;
	});


program.parse(process.argv);

if (!validator.validateArgv()) {
	process.exit(1);
}

let ast = compiler.start();
console.log(JSON.stringify(ast));