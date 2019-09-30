/**
 * @module src/compiler
 * @description Módulo que representa el compilador.
 * @version 1.0
 * <pre>
 * Integrantes:
 *  Leonardo Arellano Martínez
 *  Francisco Santos Montoya
 * </pre>
 */

let fs = require('fs')
let scanner = require('./frontend/scanner');
let parser = require('./frontend/parser');

let compiler = {};
let inputString = '';


/**
 * @function start
 * @name module:src/compiler#start
 * @public
 * @description Función que inicia el proceso del compilador.
 * @returns {JSON} Retorna el árbol de sintaxis abstracta.
 */
compiler.start = function () {
    readFileContent();
    const tokens = scanner.lex(inputString);
    console.log(tokens);
    return parser.parse(tokens);
}


/**
 * @function readFileContent
 * @name module:src/compiler#readFileContent
 * @description Función que lee el contenido de archivo y settea la variable global del módulo, inputString.
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