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

var round = 1
var hero_points = 0
var troll_points = 0
function attack() {
$("#begin").click(function(){

if (round > 3){
hero_wins = "The battle is over, you are triumphant winning " + hero_points + " points to the trolls " + troll_points + " points. Congratulations!";
troll_wins = "The battle is over, you lose! " + hero_points + " points to the trolls " + troll_points + " points. Feel the humiliating shame of defeat!!";
tie = "You have tied the troll in combat! You both live to fight another day."
	if (hero_points > troll_points){
		alert(hero_wins);
	}else if(hero_points < troll_points){
		alert(troll_wins);
	}else {
		alert(tie);
	}
	window.location.reload()
}

round_winner = ""
		hero_attacks = Math.floor((Math.random()*100)+1);
		troll_attacks = Math.floor((Math.random()*100)+1);
		if (hero_attacks > troll_attacks){
			round_winner = "you win";
			hero_points += 1;
			}else{
			round_winner = "the troll wins";
			troll_points += 1;
			};
		round += 1;
		document.getElementById('hero_attack').innerHTML = hero_attacks.toString();
		document.getElementById('troll_attack').innerHTML = troll_attacks.toString();
		document.getElementById('victor').innerHTML = round_winner.toString();
		$("#first_attack").css("display","block")
		document.getElementById('button_text').innerHTML = "Begin round " + round.toString() + "!"
		document.getElementById('troll_score').innerHTML = troll_points.toString();
		document.getElementById('hero_score').innerHTML = hero_points.toString();
});
}
attack();
