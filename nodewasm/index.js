const fs = require("fs");
const buf = fs.readFileSync("./lib/web.wasm");

async function start() {
	const lib = await WebAssembly.instantiate(new Uint8Array(buf)).then(
		(res) => res.instance.exports
	);

	const { add, subtract, multiply } = lib;
	console.log("4 + 2 = ", add(4, 2));
	console.log("4 - 2 = ", subtract(4, 2));
	console.log("4 * 2 = ", multiply(4, 2));
}

start();
