function replaceByIndex(str, index, replacement) {

return str.substr(0, index) + replacement + str.substr(index + replacement.length);

}

const word = "Jonatan Marques";

const idx = 5;

const something = "@";

const newWord = replaceByIndex(word, idx, something);

console.log(newWord); // M@theus

