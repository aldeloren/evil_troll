//animate attack on click
$("#begin_game").click(function(){
	$('#green').css('background-position','233px 0px');
	setTimeout(function() { 
    $("#green").css('background-position','0px 0px')
}, 1300);
	$('#red').css('background-position','233px -90px');
	setTimeout(function() { 
    $("#red").css('background-position','0px -90px')
}, 1300);
});

//global variables
var round = 1
var hero_points = 5
var troll_points = 5
var round_winner = ""





function attack() {
$("#begin").click(function(){


//rng an attack by each party
//display results
function deal_damage(){
		hero_attacks = Math.floor((Math.random()*100)+1);
		troll_attacks = Math.floor((Math.random()*100)+1);
		if (hero_attacks > troll_attacks){
			round_winner = "you win";
			troll_points -= 1;
			}else{
			round_winner = "the troll wins";
			hero_points -= 1;
			};
		round += 1;
		document.getElementById('hero_attack').innerHTML = hero_attacks.toString();
		document.getElementById('troll_attack').innerHTML = troll_attacks.toString();
		document.getElementById('victor').innerHTML = round_winner.toString();
		$("#first_attack").css("display","block")
		document.getElementById('button_text').innerHTML = "Begin round " + round.toString() + "!"
		document.getElementById('troll_score').innerHTML = troll_points.toString();
		document.getElementById('hero_score').innerHTML = hero_points.toString();
}
deal_damage();


//track health
function hero_health_remaining(){
	if (hero_points === 4){
		$('#green_health_bar').css('background-position','0px 18px')
	}
		if (hero_points === 3){
		$('#green_health_bar').css('background-position','0px 36px')
	}
		if (hero_points === 2){
		$('#green_health_bar').css('background-position','0px 54px')
	}
		if (hero_points === 1){
		$('#green_health_bar').css('background-position','0px 72px')
	}
		if (hero_points === 0){
		$('#green_health_bar').css('background-position','0px 90px')
	}
}
hero_health_remaining();

function troll_health_remaining(){
	if (troll_points === 4){
		$('#red_health_bar').css('background-position','0px 18px')
	}
		if (troll_points === 3){
		$('#red_health_bar').css('background-position','0px 36px')
	}
		if (troll_points === 2){
		$('#red_health_bar').css('background-position','0px 54px')
	}
		if (troll_points === 1){
		$('#red_health_bar').css('background-position','0px 72px')
	}
		if (troll_points === 0){
		$('#red_health_bar').css('background-position','0px 90px')
	}
}
troll_health_remaining();

//determine winner
function winner() {
	if (hero_points === 0 || troll_points === 0){
		hero_wins = "The battle is over, you are triumphant winning with " + hero_points + " health remaining, to the trolls' " + troll_points + " health remaining. Congratulations!";
		troll_wins = "The battle is over, you lose! You had " + hero_points + " health remaining, to the trolls' " + troll_points + " health remaining. Feel the humiliating shame of defeat!!";
	if (hero_points < troll_points){
		alert(troll_wins);
	}else if(hero_points > troll_points){
		alert(hero_wins);
	}
	window.location.reload()
}
}
winner();

});
}
attack();
