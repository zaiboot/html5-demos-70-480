var persona = new Object();
//Object.prototype.Name = 'quincho';
persona.correr = function() {
 console.log(this.Name , " is running");
}

//persona.correr();

var edgar = new Object();
edgar.Name = 'edgar';


var array = [ persona, edgar];

for ( var i = 0; i < array.length; i++){

    console.log(array[i]);
    console.log("Name = ",     array[i].Name );
    if ( array[i].correr )
    {
        array[i].correr();
    }
    console.log( "hasOwnProperty = ", array[i].hasOwnProperty("Name") );
   
}