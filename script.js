const inputBox = document.getElementById("input-box")
const listContainer =document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must type the task name")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");/*Adding the X*/
        span.innerHTML = "\u00d7";//This is the code for the x
        li.appendChild(span);
    }
    inputBox.value= ''/*To ensure that the input field is empty after adding*/
    saveData();//calling the save data function explained below
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML );//Saving the list container to store your tasks locally 
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()