const yargs = require("yargs");

/* Generate alphabet */
let lowerAlphabet = [...Array(26)].map(() => (i++).toString(36), i = 9).join("");
let upperAlphabet = lowerAlphabet.toUpperCase();

/* Generate digits & symbols */
let digits = "0123456789";
let symbols = "!@#$%^&*";

/* Get a random int */
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

/* Generate a random character of any type */
function getRandomChar(bUpper, bDigits, bSymbols) {
	let selectTypes = [];
	let length = 1;

	selectTypes.push(lowerAlphabet);

	if (bUpper) {	
		selectTypes.push(upperAlphabet); 
		length++;
	}
	if (bDigits) {
		selectTypes.push(digits); 
		length++;
	}
	if (bSymbols) {
		selectTypes.push(symbols); 
		length++;
	}

	const charType = selectTypes[ getRandomInt(length) ];
	return (charType.charAt( getRandomInt(charType.length) ));
}

/* Generate password from arguments */
function generatePassword(length, bUpper, bDigits, bSymbols) {
	let final = "";
	for (i = 0; i < length; i++)
		final += getRandomChar(bUpper, bDigits, bSymbols);
	return (final);
};

/* Handle arguments */
yargs.command("generate <length> [uppercase] [digits] [symbols]", "Generate a randomized password", (yargs) => {
	
	yargs
	.positional("length", {
		describe: "Length of the password to generate",
		type: "number",
		default: 13
	})
	.positional("uppercase", {
		describe: "Should the generator use uppercase letters in the password",
		type: "boolean",
		default: true
	})
	.positional("digits", {
		describe: "Should the generator use digits in the password",
		type: "boolean",
		default: true
	})
	.positional("symbols", {
		describe: "Should the generator use symbols in the password",
		type: "boolean",
		default: true
	})

}, (yargs) => {

	const pwdResult = generatePassword(yargs.length, yargs.uppercase, yargs.digits, yargs.symbols);
	console.log("----------------------------------");
	console.log(`Your password has been generated.\nResult : ${pwdResult}`);
	console.log("----------------------------------\n");
	console.log(`Thank you for using this system!\nMade by Wasied.`);

}).argv;
