/**
 * @module src/frontend/parser
 * @description Módulo que representa el analizador sintáctico.
 * @version 1.0
 * <pre>
 * Integrantes:
 *  Leonardo Arellano Martínez
 *  Francisco Santos Montoya
 * </pre>
 */

let types = {
    op: 'op',
    num: 'num'
};

let parser = {};

/**
 * @function parse
 * @name module:src/frontend/parser#parse
 * @public
 * @description Función que se encarga del proceso de análisis sintáctico.
 * @param {Array.<String>} tokens Arreglo que contiene los tokens.
 * @returns {JSON} JSON que representa el árbol de sintaxis abstracta.
 */
parser.parse = function (tokens) {
    let c = 0;

    let peek = function () {
        return tokens[c];
    }

    let consume = function () {
        return tokens[c++];
    };

    let parseNum = function () {
        return {
            val: new Number(consume()),
            type: types.num
        }
    }

    let parseOp = function () {
        let node = {
            val: consume(),
            type: types.op,
            expr: []
        };
        while (peek())
            node.expr.push(parseExpr());
        return node;
    }

    let parseExpr = function () {
        return /\d/.test(peek()) ? parseNum() : parseOp();
    }

    return parseExpr();
}

module.exports = parser; 