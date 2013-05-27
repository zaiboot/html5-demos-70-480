
// http://thepiratebay.sx/search/supernatural%20S08E23/0/7/0
var  iframeLists = document.getElementsByTagName("iframe");

var attributes = iframeLists[0].attributes;

console.log(iframeLists[0]); 
console.log("attributes ", attributes);
console.log("width = ", attributes["width"]);
console.log("width = ", attributes["width"].value);
console.log("width = ", attributes[0].name);
