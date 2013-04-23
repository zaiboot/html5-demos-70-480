//All object in js has a protype.
// http://javascript.crockford.com/private.html
function SuperHeroe( powerIndex ){
	//public variables or accesible 
	//by everyone.
	this.number;
	this.name;
	
	//	defines how to punch someone.
	 this.punch= function( who ){
		//Not enough power to punch someone else.
		if ( kii < 1) { 
			
			return;
		}
		// the other guy will loose some power
		console.log( this.name +" punched " + who.name );
		who.loosePower(kii);
		
		//this superheroe lost some power because punched 
		//someone else.
		kii = kii - 1;
		if ( kii < 1) { 
			console.log(who.name, " cannot continue.")
			return false;
		}
		return true;
	}
	
	
	this.loosePower = function( othersPower ){
		if (othersPower > kii) { 
			kii--; 
			console.log("It is supper effective");
		}else
			console.log( "Nothing happened");
	}
	
	//This variables will be accesible ONLY inside this function
	var kii = powerIndex || Number.MAX_VALUE;
	
}

var goku = new SuperHeroe(Math.floor(Math.random()*10) + 1 );
goku.number = 1;
goku.name ="Kakaroto";

var superman = new SuperHeroe(Math.floor(Math.random()*10) + 1 );
superman.number = 2;
superman.name ="Clark Kent";
var SingleRound = function (){
	if ( !goku.punch(superman) ) { clearInterval( intervalId ); }
	if ( !superman.punch(goku) ) { clearInterval( intervalId ); }
}

var intervalId = setInterval(SingleRound, 500 );
