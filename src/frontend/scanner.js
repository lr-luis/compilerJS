/**
 * @module src/frontend/scanner
 * @description Módulo que representa el analizador léxico.
 * @version 1.0
 * <pre>
 * Integrantes:
 *  Leonardo Arellano Martínez
 *  Francisco Santos Montoya
 * </pre>
 */
let scanner = {};

/**
 * @function lex
 * @name module:src/frontend/scanner#lex
 * @public
 * @description Función que se encarga de generar los tokens.
 * @param {String} str Código que fue leido del archivo fuente.
 * @returns {Array.<String>} Tokens encontrado en el código fuente.
 */
scanner.lex = function (str) {
	return str.split(" ")
		.map(function (s) {
			return s.trim();
		}).filter(function (s) {
			return s.length;
		});
}

module.exports = scanner;