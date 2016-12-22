$("body").css({"background-color": "#FAEBD7", "font-size": "200%"})
$('li').css('color','#50F2BC')
$("ul").css("text-color","red")
$("ul").css("float" ,"middle")
$("input").css({"width":400, "height":50, "font-size":25})
$("h3").css("font-family","Comic Sans MS")
$("th").css("font-family","Comic Sans MS")
$("img").css({"width":200, "height":200})
$(".y").css('color',"#F78181")



var people = [];
function makePerson(){
	people.push({
		name: $("#name1").val(),
		dOfB: $("#dOfB1").val(),
		hobby: $("#hobby1").val(),
		color: $("#color1").val(),
		food: $("#food1").val(),
		bestfriend: $("#bestfriend1").val(),
		favFamily: $("#favFamily1").val(),
		mumName: $("#mumName1").val()
	});
}

function makePerson2(){
	people.push({
		name: $("#name2").val(),
		dOfB: $("#dOfB2").val(),
		hobby: $("#hobby2").val(),
		color: $("#color2").val(),
		food: $("#food2").val(),
		bestfriend: $("#bestfriend2").val(),
		favFamily: $("#favFamily2").val(),
		mumName: $("#mumName2").val()
	});
	//$('div').hide();
}

function clear(){
	$(".input").val() = "";
}

var score1;
function score(){
	score1 = 0;
	for (var key in people[0]) {
		if(people[0][key] === people[1][key])
			score1++;
	}
	$("body").css("background-color",'#50F2BC')
	return score1;
}

var score2;
function scoreShow(){
	score2 = 0;
	for (var key in people[0]) {
		if(people[2][key] === people[3][key])
			score2++;
	}

	if(score1>3 && score2>3){
		$('table').hide();
		$('h3').hide();
		$('img').hide();
		//put photo and turn on song
		var imgWin = document.createElement('img');
		imgWin.src = "imgWin.jpg";
		$('body').append(imgWin);

		var songWin = document.createElement('audio');
		songWin.src = "nasene.m4a"
		$('img').append(songWin);
		songWin.play();
	}
	else{
		$('table').hide();
		$('h3').hide();
		$('img').hide();
		//put photo and turn on song
		var imgLose = document.createElement('img');
		imgLose.src = "imgLose.jpg";
		$('body').append(imgLose);

		var songWin = document.createElement('audio');
		songWin.src = "eb3ed.m4a";
		$('img').append(songWin);
		songWin.play();
	}
}




