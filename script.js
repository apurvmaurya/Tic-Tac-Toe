var occupied = [0,0,0,0,0,0,0,0,0];
var result = document.querySelector(".result");
var blocks = document.querySelectorAll(".block");


blocks.forEach(block => {
    block.addEventListener( "click" , (event) => {
        var id = event.target.id;
        var idNumber = id[5];
        if(occupied[idNumber]=== 1 || occupied[idNumber]=== 2)
        {
            result.innerHTML = "Occupied";   
        }
        else
        {
            result.innerHTML = "";
            document.querySelector("#"+id).classList.add("you");
            occupied[idNumber]=2;
            var bool = checkForWin(2);
            if(bool===true)
            {
                result.innerHTML = "You Win , Click for ";
            }
            else
            {
                if(occupied.includes(0))
                {
                    compTurn();
                }
                else
                {
                    result.innerHTML = "Game Over";
                }
            }
        }
    }); 
})


function compTurn()
{
    var number = Math.floor(Math.random()*9);
    while(occupied[number]!=0)
    {
        number = Math.floor(Math.random()*9);
    }

    document.querySelector( "#block" + number ).classList.add("comp");
    occupied[number]=1;

    var bool = checkForWin(1);
    if(bool===true)
    {
        result.innerHTML = "Comp Win";
    }
}

function checkForWin(val)
{
    if((occupied[0]===occupied[1] && occupied[1]===occupied[2] && occupied[1]===val) || (occupied[0]===occupied[3] && occupied[3]===occupied[6] && occupied[3]===val) || (occupied[0]===occupied[4] && occupied[4]===occupied[8] && occupied[4]===val))
    {
        return true;
    }
    else if(occupied[1]===occupied[4] && occupied[4]===occupied[7] && occupied[4]===val)
    {
        return true;
    }
    else if((occupied[2]===occupied[5] && occupied[5]===occupied[8] && occupied[5]===val)  || occupied[2]===occupied[4] && occupied[4]===occupied[6] && occupied[4]===val)
    {
        return true;
    }
    else if(occupied[3]===occupied[4] && occupied[4]===occupied[5] && occupied[4]===val)
    {
        return true;
    }
    else if(occupied[6]===occupied[7] && occupied[7]===occupied[8] && occupied[7]===val)
    {
        return true;
    }
    else
    {
        return false;
    }
}
