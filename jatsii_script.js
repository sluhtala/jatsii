
var locked_dice = [0, 0, 0, 0, 0];
var dices = [1, 1, 1, 1, 1];

function lock_dice(dice_num, id)
{
	var dice = parseInt(dice_num);
	if (locked_dice[dice - 1] == 0)
	{
		locked_dice[dice - 1] = 1;
		document.getElementById(id).style.color = "grey";
	}
	else
	{
		locked_dice[dice - 1] = 0;
		document.getElementById(id).style.color = "black";
	}
}

function roll_dice()
{
	var randomroll;
	var i = 0;
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
}

function update_dices()
{
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
	document.getElementById("dice_1").style.color = "black";
	document.getElementById("dice_2").style.color = "black";
	document.getElementById("dice_3").style.color = "black";
	document.getElementById("dice_4").style.color = "black";
	document.getElementById("dice_5").style.color = "black";
	update_dices();
}

function randInt(min, max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}


