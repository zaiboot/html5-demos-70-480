$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	//fill Rect (x,y,width,height)
	ctx.fillStyle = "green"
	ctx.strokeStyle = 'black';
	ctx.fillRect(10,10,100,200);
	ctx.strokeRect(10,10,100,200);

	ctx.fillStyle = "green"
	ctx.strokeStyle = 'black';
	ctx.rect(120,10,100,200);
	ctx.fill();
	ctx.stroke();
});