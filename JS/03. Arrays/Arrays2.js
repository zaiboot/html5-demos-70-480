var arrayWithSquareBrackets = [];

var arrayWithNew = new Array();

arrayWithSquareBrackets.push("index 0");
arrayWithNew.push("index 0")

arrayWithSquareBrackets[1024*1024] = "quincho";
arrayWithNew[1024*1024] = "Goku";

console.log(arrayWithSquareBrackets);
console.log(arrayWithNew);