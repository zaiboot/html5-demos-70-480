$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(80, 50);

	//top right corner
	ctx.arcTo(210, 50, 210, 70, 20);

	//bottom right
	ctx.arcTo(210, 200, 160, 200, 20);

	//bottom left
	ctx.arcTo(60, 200, 60, 180, 20);

	//top left
	ctx.arcTo(60, 50, 100, 50, 20);
	ctx.stroke();

	ctx.fillStyle = 'Navy';
	ctx.fill();
});