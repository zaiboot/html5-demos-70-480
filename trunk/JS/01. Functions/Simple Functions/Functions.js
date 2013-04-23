/// This is a simple function.
/// f(x) = x+1
/// it will be stored on the global object 
/// called window
function simpleFunction( x ){
	return x+1;
}

/// anonymous or nameles, since the function 
/// does not have a name. It has a variable pointing
/// to the function
var anonFunction =  function(){
	console.log("Anon Function ", 1);
};

/// Call to anonymous function
(function(){ 
	window.alert("Aloha");
	console.log( "simpleFunction ",  window.simpleFunction( 50 ));
	anonFunction();
})();