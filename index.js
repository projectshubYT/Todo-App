const addButton = document.getElementById("push")
const tasks = document.getElementById("tasks")
const taskInput = document.getElementById("taskInput")

addButton.onclick = function(){
    if(taskInput.value.length == 0){
        return alert("Please Enter a Task")
    }

    tasks.innerHTML += `<li>${taskInput.value}</li>`;

    taskInput.value = ""
}