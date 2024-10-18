/* Nim Trainer by Jacob
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */

// global variables
var trainer = false;
var count = 0;

/* Main */
function main(){
    let again = false;
    trainer = confirm("Would you like to use trainer mode?")
    playNim();
    again = confirm("Play again?");
    if (again == true) main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */

/* playNim */
function playNim(){
    // alert("Playing Nim!")
    count = 0;
    while (count < 21){
        userTurn();
        if (count > 20) alert("You lose!");
        else{
            cpuTurn();
            if (count > 20) alert("You win!");
        }
    }
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    // count += 3;
    // alert("You counted 3, count is now " + count + ".");
    let turn = prompt("Pick a number, 1-3.");
    turn = parseInt(turn);
    if (turn < 1 || turn > 3){
        alert("Your input is invalid!")
        userTurn();
    }
    else{
        count += turn;
        alert("Count is now " + count + ".");
    }
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
    // count += 3;
    if (count == 17) turn = 3;
    else if (count == 18) turn = 2;
    else if (count > 18) turn = 1;
    else if (trainer == true) turn = 4 - count % 4;
    else turn = Math.floor(Math.random()*3)+1;
    count += turn;
    alert("I counted " + turn + ", count is now " + count + ".");
}



