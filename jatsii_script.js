
var locked_dice = [0, 0, 0, 0, 0];
var dices = [1, 1, 1, 1, 1];
var roll_amount = 0;
var jatsii = 0;
var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var bonus_score = 0;

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

function update_scores()
{
	var i = 0;
	var m_sum = 0;
	while (i < 15)
	{	
		scores[i] = parseInt(document.getElementById("score_" + (i+1)).value);
		if (!scores[i])
		{
			scores[i] = 0;
		}
		if (i < 6 && scores[i])
		{
			m_sum += 1;;
		}
		i++;
	}
	if (m_sum == 6)
	{
		m_sum = mid_summ();
		if (m_sum >= 63)
		{
			bonus_score = 50;
			document.getElementById("midsum").innerHTML = m_sum + " bonus 50!";
		}
		else
		{
			bonus_score = 0;
			document.getElementById("midsum").innerHTML = m_sum + " no bonus..";
		}
	}
	var sum = scores.reduce((a,b) => a + b, 0);
	document.getElementById("sum").innerHTML = (sum + bonus_score);
}

function mid_summ()
{
	var num = 0;
	var i = 0;

	while (i < 6)
	{
		num = num + scores[i];
		i++;
	}
	return num;
}


function check_jatsii()
{
	var num = dices[0];
	var i = 1;
	if (jatsii == 1)
		return ;
	while (i < 5)
	{
		if (dices[i] != num)
		{
			return ;
		}
		i++;
	}
	jatsii = 1;
	document.getElementById("jatsii_text").innerHTML = "JATSII!";
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

function new_game()
{
	var i = 0;
	reset_all();

	bonus_score = 0;
	while(i < 15)
	{
		scores[i] = 0;
		document.getElementById("score_" + (i + 1)).value = "";
		i++;
	}
	document.getElementById("midsum").innerHTML = 0;
	update_scores();
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
	jatsii = 0;
	update_dices();
}

function randInt(min, max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}


