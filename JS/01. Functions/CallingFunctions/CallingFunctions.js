// how to call a function
var value = 0;
var myNewThis = {
	value : 1
};
function SumNumber( theNumber ){
	console.log( value, " += ", theNumber);
	this.value += theNumber;
	console.log(" this.value =" ,this.value );
}

function SumNumberWithApply( theNumber ){
	//Now we use apply
	var arguments = [theNumber];

	SumNumber.apply(myNewThis, arguments);
}

function SumNumberWithCall( theNumber ){

	SumNumber.call(myNewThis,  theNumber);
}

for( var i= 1; i < 5 ; i ++) SumNumber(i);


//Now we use apply
console.log("with apply");
for( var i= 1; i < 5 ; i ++) SumNumberWithApply(i);

//Now we use call
console.log("with call");
for( var i= 1; i < 5 ; i ++) SumNumberWithCall(i);
