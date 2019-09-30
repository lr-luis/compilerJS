let types = {
    op: 'op',
    num: 'num'
};

let parser = {};

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