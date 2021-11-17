var baguettes = 15


var bakercost = 15
var baker = 0

function buybaker(baguettes,bakercost, baker)     {
if (bakercost <= baguettes)     {
        baguettes = baguettes - bakercost;
        baker = baker + 1;
    }
} return buybaker