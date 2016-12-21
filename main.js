$("body").css({"background-color": "#FAEBD7", "font-size": "200%"})
$('li').css('color','#50F2BC')
$("ul").css("text-color","red")
$("ul").css("float" ,"middle")
$("input").css({"width":400, "height":50, "font-size":30})
$("h3").css("font-family","Comic Sans MS")
$("#pair").css("float","right")
$("img").css({"width":200, "height":200})







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

function score(){
	var score = 0;
	for (var key in people[0]) {
		if(people[0]["key"] === people[1]["key"])
			score++;
	}
	return score;
}


