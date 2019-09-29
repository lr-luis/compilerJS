let fs = require('fs')
let scanner = require('./frontend/scanner');
let parser = require('./frontend/parser');

let compiler = {};
let inputString = '';


/**
 * @function start
 * @description Función que inicia el proceso del compilador.
 */
compiler.start = function () {
    readFileContent();
    const tokens = scanner.lex(inputString);
    console.log(tokens);
    return parser.parse(tokens);
}


/**
 * @function readFileContent
 * @description Función que lee el contenido de archivo y settea la variable global del módulo, inputString
 */
function readFileContent () {
    try {
        inputString = fs.readFileSync(fileValue, 'utf8');
    } catch (error) {
        console.log("An error ocurred when read file: " + fileValue);
        process.exit(1);
    }
}


module.exports = compiler;