var textShown = false;
var Name = "Ahmed";
var Age = 19;
var Id = 5000;
function FlipShownBool(){
    textShown = !textShown;
}
function ShowName(){
if (textShown){
    document.getElementById("main_title").textContent = "";
   FlipShownBool();
    return;
}

FlipShownBool();
var welcomeMessage = `Hi I'm ${Name}, You're ${Age} Years old, Id: ${Id}`;
document.getElementById("main_title").textContent = welcomeMessage;
}
