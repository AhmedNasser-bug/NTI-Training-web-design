var taskTemp = document.getElementById("task-obj").cloneNode(true);
taskTemp.classList.remove("visually-hidden");

var taskList = document.getElementById("tasks-cont");
var tasker = document.getElementById("tasker");

function addTask(){
    var newNode = taskTemp.cloneNode(true);
    var newTask = tasker.nodeValue;
     newNode.firstChild.appendChild(<p>{newTask}</p>);
     taskList.appendChild(newNode);
     tasker.textContent = "";
}