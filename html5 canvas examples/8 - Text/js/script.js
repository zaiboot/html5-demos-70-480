$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	
	/*ctx.strokeStyle = 'Navy';
	ctx.fillStyle = 'Green';
	var  text = 'Hello World';
	ctx.font = '40pt Arial';

	//text looks better with the stroke after the fill

	ctx.fillText(text, 50, 50);
	ctx.strokeText(text, 50, 50);*/

	var fontSize = 10;

	for (var i=5;i<=25;i+=5){
		var text = 'Canvas Text! ' + fontSize;
		ctx.font = fontSize + 'px Arial';
		var y = ctx.measureText(text).width;
		ctx.fillText(text,10,y);
		fontSize += 5;
	}

});