var valueTrue = true;

var logResults = function() {
    if (valueTrue === true ) console.log("True"); else  console.log("false");
    
    if (valueTrue == true ) console.log("True"); else  console.log("false");
    
    if (valueTrue ) console.log("True"); else  console.log("false");
};

logResults();

console.log("\n\nNow set to false.");
valueTrue = false;
logResults();

console.log("\n\nNow set to undefined.");
valueTrue = undefined;
logResults();


console.log("\n\nNow set to undefined.");
valueTrue = {};
logResults();

console.log("\n\nNow set to undefined.");
valueTrue = '';
logResults();

console.log("\n\nNow set to undefined.");
valueTrue = 0;
logResults();

if ( 0 == '') console.log("True"); else  console.log("false");
if ( 0 === '') console.log("True"); else  console.log("false");

