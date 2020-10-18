const { src, dest } = require("gulp");

function copy() {
	return src("index.js").pipe(dest("controllers/"));
}
exports.copy = copy;
