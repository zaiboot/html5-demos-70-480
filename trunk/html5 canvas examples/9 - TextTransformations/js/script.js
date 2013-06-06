$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	
	ctx.font = '30pt Arial';
	ctx.fillText('Regular Text', 100, 50);

	ctx.save();
	ctx.translate(100,300);
	ctx.save();
	ctx.rotate(-0.5 * Math.PI);

	var rText = 'Rotated Text';
	ctx.fillText(rText, 0, 0);
	ctx.restore();
	ctx.restore();
	ctx.restore();
	var rWidth = ctx.measureText(rText).width;
	ctx.fillText('Regular Text', 100, rWidth + 120);

});