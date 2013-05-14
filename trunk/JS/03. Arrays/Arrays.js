var  array = [];
array["prop"] = 1;
console.log("As an array ", array["prop"]);
console.log("As an indexed array ", array[0]);
console.log("As an object ", array.prop);

console.log("redefine the array as Array Class\n\n\n");

array  = new Array();
array.push(1);
array[50] = "adsadsa";
console.log("As an array ", array[0]);

console.log("redefine the array  as json object\n\n\n");
array  = { 
    "prop": 1
};
//array["prop"] = 1;

console.log("As an array ", array["prop"]);
console.log("As an indexed array ", array[0]);
console.log("As an object ", array.prop);