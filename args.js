#!/usr/bin/env node

let myArg = process.argv[2];

let [,, ...myArgs] = process.argv;

function addArgs(myArgs) {
	let sum = myArgs.reduce((a,b) => +a + +b, 0);
	console.log(sum);
}

addArgs(myArgs);