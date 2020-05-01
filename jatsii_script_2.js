
function checkbox_update(id, scores)
{
	var checkbox = document.getElementById("score_" + id + "_cb");
	if (checkbox.checked == true)
	{
		document.getElementById("score_"+ id).value = scores;
	}
	else
	{
		document.getElementById("score_"+ id).value = "";
	}
	update_scores();		
}

function aces()
{
	var mask = [1,0,0,0,0,0];
	var scores = score_from_dices(mask);
	checkbox_update(1, scores);
}

function twos() 
{
	var mask = [0,1,0,0,0,0];
	var scores = score_from_dices(mask);
	checkbox_update(2, scores);

}

function threes()
{
	var mask = [0,0,1,0,0,0];
	var scores = score_from_dices(mask);
	checkbox_update(3, scores);

}

function fours()
{
	var mask = [0,0,0,1,0,0];
	var scores = score_from_dices(mask);
	checkbox_update(4, scores);

}

function fives()
{
	var mask = [0,0,0,0,1, 0];
	var scores = score_from_dices(mask);
	checkbox_update(5, scores);

}

function sixes()
{
	var mask = [0,0,0,0,0, 1];
	var scores = score_from_dices(mask);
	checkbox_update(6, scores);
}


function pair()
{
	var i = find_biggest_same(2, 0);
	var scores = (i * 2);
	checkbox_update(7, scores);
}

function two_pairs()
{
	var i = find_biggest_same(2, 0);
	var j = find_biggest_same(2, i);
	var scores = (i * 2 + j * 2);
	if (i == 0 || j == 0)
		scores = 0;	
	checkbox_update(8, scores);	
}

function three_of_a_kind()
{
	var i = find_biggest_same(3, 0);
	var scores = (i * 3);
	if (i == 0)
		scores = 0;
	checkbox_update(9, scores);
}

function four_of_a_kind()
{
	var i = find_biggest_same(4, 0);
	var scores = (i * 4);
	if (i == 0)
		scores = 0;
	checkbox_update(10, scores);
}

function sm_straight()
{
	var i = 0;
	var j = 0;
	var mask = [1,1,1,1,1,0];
	var scores = score_from_dices(mask);
	var amount = 0;

	while (i < 5)
	{
		j = 0;
		amount = 0;
		while (j < 5)
		{
			if (dices[j] == (i + 1))
			{
				amount += 1;
			}
			j++;
		}
		if (amount != 1 )
			scores = 0;
		i++;
	}
	checkbox_update(11, scores);

}

function lg_straight()
{
	var mask = [0,1,1,1,1,1];
	var scores = score_from_dices(mask);
	var amount = 0;
	var i = 1;
	var j = 0;
	while (i < 6)
	{
		j = 0;
		amount = 0;
		while (j < 5)
		{
			if (dices[j] == (i + 1))
			{
				amount += 1;
			}
			j++;
		}
		if (amount != 1 )
			scores = 0;
		i++;
	}
	checkbox_update(12, scores);

}

function full_house()
{
	var i = find_biggest_same(3, 0);
	var j = find_biggest_same(2, i);
	var scores = (i * 3 + j * 2);
	if (j == 0 || i == 0)
		scores = 0;
	checkbox_update(13, scores);

}

function chance()
{
	var mask = [1,1,1,1,1,1];
	var scores = score_from_dices(mask);
	checkbox_update(14, scores);

}

function yatsii()
{
	var i = find_biggest_same(5, 0);
	var scores = 50;
	if (i == 0)
		scores = 0;
	checkbox_update(15, scores);
}
