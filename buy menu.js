
var bergets = 15


var bakercost = 15
var baker = 0

function buybaker(bergets,baker)     {
if (bakercost <= bergets)     {
        bergets = bergets - bakercost;
        baker = baker + 1;
    }
}
console.log(buybaker)
