var div = document.getElementById("tester")
div.style.backgroundColor = localStorage.getItem("color")

function setColor(node){
    localStorage.setItem("color", getComputedStyle(node).backgroundColor);
    div.style.backgroundColor = localStorage.getItem("color");
}