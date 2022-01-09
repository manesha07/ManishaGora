// Write a function that returns the string "something" joined with a space " " and the given argument a. 

function giveMeSomething(str) {
    return("something ".concat( str));
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {
    return str.substr(1)
}

console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))