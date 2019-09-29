let scanner = {};

scanner.lex = function (str) {
	return str.split(" ")
		.map(function (s) {
			return s.trim();
		}).filter(function (s) {
			return s.length;
		});
}

module.exports = scanner;