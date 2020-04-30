
var locked_dice = [0, 0, 0, 0, 0];
var dices = [1, 1, 1, 1, 1];
var roll_amount = 0;
function lock_dice(dice_num, id)
{
	var dice = parseInt(dice_num);
	if (roll_amount == 0)
	{
		return ;
	}
	if (locked_dice[dice - 1] == 0)
	{
		locked_dice[dice - 1] = 1;
		document.getElementById(id).style.opacity = 0.5;
	}
	else
	{
		locked_dice[dice - 1] = 0;
		document.getElementById(id).style.opacity = 1;
	}
}

function roll_dice()
{
	var randomroll;
	var i = 0;
	roll_amount += 1;

	while (i < 5)
	{
		if (locked_dice[i] != 1)
		{	
			randomroll = randInt(1,7);
			dices[i] = randomroll;
		}
		i++;
	}
	update_dices();
	check_jatsii();
}

function check_jatsii()
{
	var num = dices[0];
	var i = 1;
	while (i < 5)
	{
		if (dices[i] != num)
		{
			return ;
		}
		i++;
	}
	document.getElementById("jatsii_text").innerHTML = "JATSII! " + roll_amount + " heittoa";
}

function update_dices()
{
	document.getElementById("roll_amount").innerHTML = "Heittojen m&#228;&#228;r&#228;: " + roll_amount;
	document.getElementById("dice_1").innerHTML = dices[0];
	document.getElementById("dice_2").innerHTML = dices[1];
	document.getElementById("dice_3").innerHTML = dices[2];
	document.getElementById("dice_4").innerHTML = dices[3];
	document.getElementById("dice_5").innerHTML = dices[4];
}

function reset_all()
{
	var i = 0;
	while (i < 5)
	{
		dices[i] = 1;
		locked_dice[i] = 0;
		i++;
	}
	roll_amount = 0;
	document.getElementById("dice_1").style.opacity = 1;
	document.getElementById("dice_2").style.opacity = 1;
	document.getElementById("dice_3").style.opacity = 1;
	document.getElementById("dice_4").style.opacity = 1;
	document.getElementById("dice_5").style.opacity = 1;
	document.getElementById("jatsii_text").innerHTML = "";
	update_dices();
}

function randInt(min, max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}


