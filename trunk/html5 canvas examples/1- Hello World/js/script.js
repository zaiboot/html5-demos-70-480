$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	//fill Rect (x,y,width,height)
	ctx.fillStyle = 'Green';
	ctx.fillRect(300,200,200,100);

	ctx.fillStyle = 'Navy';
	//(x,y,radius, startAngle, endAngle, antiClockwise)
	ctx.arc(100,100,50,0,2 * Math.PI,false);
	ctx.fill();
});