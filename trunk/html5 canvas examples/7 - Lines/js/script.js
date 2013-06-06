$(function() {
	//Find the canvas
	var canvas = $("#myCanvas")[0];
	//Acces the 2d context (pen/brush)
	var ctx = canvas.getContext('2d');
	//Render Graphics 
	
	ctx.strokeStyle = 'red';
	ctx.fillStyle = 'green';
	ctx.lineWidth = 10;

	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.lineTo(80, 125);
	ctx.lineTo(80, 160);
	ctx.lineTo(100, 185);
	ctx.lineTo(140, 185);
	ctx.lineTo(160, 160);
	ctx.lineTo(160, 125);
	ctx.lineTo(140, 100);
	//dato interesante con respecto a la linea final.. 
	//por el begin path, la figura se termina de llenar, 
	//pero dibuja realmente la linea si no se especifica
	//ctx.closePath();
	//ctx.lineTo(100, 100);

	ctx.fill();
	ctx.stroke();

	ctx.moveTo(200, 100);
	ctx.lineTo(220, 185);
	ctx.lineTo(300, 150);

	ctx.lineJoin = 'miter';
	ctx.miterLimit = 1;
	//ctx.lineCap = 'square';
	ctx.stroke();
});