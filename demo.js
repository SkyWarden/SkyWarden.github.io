
var demoCanvas = document.getElementById("demoCanvas"); 
var gameWindow = demoCanvas.getContext("2d");

var settings = 
{
	canvasOne: 
	{
		canvasStartX: 0,
		canvasStartY: 0,
		canvasWidth: 700,
		canvasHeight: 400,
		width: 60,
		height: 60,
		xLeftMost: 250,
		xRightMost: 450,
		x: 350,
		y: 200,
		delta: 10,
		backgroundColor: "#ffccdd",
		fillColor: "#003366"
	},

	canvasTwo: 
	{
		canvasStartX: 700,
		canvasStartY: 0,
		canvasWidth: 300,
		canvasHeight: 200,
		width: 50,
		height: 50,
		xLeftMost: 750,
		xRightMost: 950,
		x: 850,
		y: 100,
		delta: 20,
		backgroundColor: "#ffb3b3",
		fillColor: "#006600"
	},

	canvasThree: 
	{
		canvasStartX: 700,
		canvasStartY: 200,
		canvasWidth: 300,
		canvasHeight: 200,
		width: 40,
		height: 40,
		xLeftMost: 750,
		xRightMost: 950,
		x: 850,
		y: 300,
		delta: 30,
		backgroundColor: "#99ff99",
		fillColor: "#ff0066"
	}
};

function gameStatusInterval()	
{ 
  	setInterval(update, 1000/500.0); 
}

function update()
{
	// gameWindow.fillStyle = "#000000";
	// gameWindow.fillRect(0, 0, 1000, 400);
	gameWindow.fillStyle = settings.canvasOne.backgroundColor;
	gameWindow.fillRect(settings.canvasOne.canvasStartX, settings.canvasOne.canvasStartY, settings.canvasOne.canvasWidth, settings.canvasOne.canvasHeight);
	
	gameWindow.fillStyle = settings.canvasTwo.backgroundColor;
	gameWindow.fillRect(settings.canvasTwo.canvasStartX, settings.canvasTwo.canvasStartY, settings.canvasTwo.canvasWidth, settings.canvasTwo.canvasHeight);
	
	gameWindow.fillStyle = settings.canvasThree.backgroundColor;
	gameWindow.fillRect(settings.canvasThree.canvasStartX, settings.canvasThree.canvasStartY, settings.canvasThree.canvasWidth, settings.canvasThree.canvasHeight);



	// if(settings.canvasOne.x >= settings.canvasOne.xRightMost || settings.canvasOne.x <= settings.canvasOne.xLeftMost)
	// {
	// 	settings.canvasOne.delta *= -1;
	// }

	if(settings.canvasTwo.x >= settings.canvasTwo.xRightMost || settings.canvasTwo.x <= settings.canvasTwo.xLeftMost)
	{
		settings.canvasTwo.delta *= -1;
	}

	if(settings.canvasThree.x >= settings.canvasThree.xRightMost || settings.canvasThree.x <= settings.canvasThree.xLeftMost)
	{
		settings.canvasThree.delta *= -1;
	}

	// settings.canvasOne.x += settings.canvasOne.delta;
	settings.canvasTwo.x += settings.canvasTwo.delta;
	settings.canvasThree.x += settings.canvasThree.delta;

	gameWindow.fillStyle = settings.canvasOne.fillColor;
	gameWindow.fillRect(settings.canvasOne.x, settings.canvasOne.y, settings.canvasOne.width, settings.canvasOne.height);
	
	gameWindow.fillStyle = settings.canvasTwo.fillColor;
	gameWindow.fillRect(settings.canvasTwo.x, settings.canvasTwo.y, settings.canvasTwo.width, settings.canvasTwo.height);
	
	gameWindow.fillStyle = settings.canvasThree.fillColor;
	gameWindow.fillRect(settings.canvasThree.x, settings.canvasThree.y, settings.canvasThree.width, settings.canvasThree.height);
}

$(document).keydown(function(key) 
{
	if(key.keyCode == 37)
	{
		settings.canvasOne.x -= 8;
	}
	else if(key.keyCode == 39)	
	{	
		settings.canvasOne.x += 8;
	}
	else if(key.keyCode == 38)
	{
		 settings.canvasOne.y -= 8;
	}
	else if(key.keyCode == 40)
	{		
		settings.canvasOne.y += 8;
	}
});

function changeSettings(input)
{
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() 
	{
		if(this.readyState == 4 && this.status == 200) 
		{
			settings = JSON.parse(this.responseText);
		}
	};

	if(input == 0)
	{	
		var file = "defaultSettings.JSON";
	}
	else if(input == 1)
	{
		var file = "altSettings.JSON";
	}

	xmlhttp.open("GET", file, true);
	xmlhttp.send();
}

gameStatusInterval();
