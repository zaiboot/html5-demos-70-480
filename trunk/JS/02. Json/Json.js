//Json
var dateJson = {
	//Obtains the date set by initialize
	getDate: function(){
		return this.day +"/" + this.month  + "/" + this.year;
	},
	//the format for the date is: MM/dd/yyyy
	initialize: function( strDate ){
		//the length of the string must be 10		
		//TODO: comment the restriction
		if (strDate.length != 10 ) return false;
		this.day = undefined;
		this.month = undefined;
		this.year = undefined;
		
		var month= strDate.substring(0,2);
		var day= strDate.substring(3,5);
		var year= strDate.substring(6,10);
		
		var iMonth = parseInt( month, 10);
		var iDay = parseInt( day, 10);
		var iYear = parseInt( year, 10);
		
		if ( isNaN(iMonth) || isNaN(iDay) || isNaN(iYear)    ) return false;
		
		this.day = iDay;
		this.month = iMonth;
		this.year = iYear;
		return true;
	}
};
var stringsToReview = [
	"01/24/2013", "24/01/2013", "24/1", 
	"01/24/AAAAA",	"0A/24/2013", "24/A0/2013"

 ];
var arrayLength = stringsToReview.length;

for (var i =0; i < arrayLength; i++ ){

	console.log("Trying " , stringsToReview[i]);
	try{
		dateJson.initialize(stringsToReview[i]);	
		console.log("The date set is: ", dateJson.getDate())
	}catch(ex){
		console.log("Whoops! an error.");
	}
}