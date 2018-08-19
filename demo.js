
var map = document.getElementById("map"); 
var ctx = map.getContext("2d");

var settings = 
{
	width: 60,
	height: 60,
	xLeftMost: 100,
	xRightMost: 400,
	x: 300,
	y: 280,
	delta: 10,
	backgroundColor: "#e6f2ff",
	fillColor: "#000000"
};

ctx.fillStyle = settings.fillColor;
ctx.fillRect(settings.x, settings.y, settings.width, settings.height);

function gameStatusInterval()	
{ 
  	setInterval(gameStatus, 1000/60.0); 
}

function gameStatus()
{
	update();
}

function update()
{
	ctx.fillStyle = settings.backgroundColor;
	ctx.fillRect(0, 0, 600, 600);

	if(settings.x >= settings.xRightMost || settings.x <= settings.xLeftMost)
	{
		settings.delta *= -1;
	}

	settings.x += settings.delta;

	ctx.fillStyle = settings.fillColor;
	ctx.fillRect(settings.x, settings.y, settings.width, settings.height);
}

function changeSettings(input)
{
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() 
	{
		if(this.readyState == 4 && this.status == 200) 
		{
			settings= JSON.parse(this.responseText);
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
