$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	var scores = [100,90,85,45,72,88];
	var width = 50;
	var currX = 50;
	var base = 200;

	ctx.fillStyle = "green";
	for(var i=0;i<scores.length;i++){
		var h = scores[i];
		ctx.fillRect(currX, canvas.height - h, width, h);
		currX += width + 10;
	}
});