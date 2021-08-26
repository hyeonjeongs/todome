const inputBox = document.querySelector(".input-text-box");
const input = inputBox.querySelector("input");
const toDoBox = document.querySelector("#todo-box1");
const toDoList = toDoBox.querySelector(".list");
const toDoText = toDoList.querySelector("span");

const allToDoList = document.querySelectorAll(".list");

const TODO = "toDoThing"

function deleteP(child){
    let parent = child.parentNode;
    parent.parentNode.removeChild(parent);
    showNothing();
}

function handleCheckboxChange(target, checkornot){
    if(checkornot === true){
        const targetParentNode = target.parentNode;
        const targetPNextSibling = targetParentNode.nextElementSibling;
        const listFinished = targetPNextSibling.nextElementSibling;
        listFinished.appendChild(target);
        showNothing();
    } else{
        toDoList.appendChild(target);
        showNothing();
    }
}

function addToDoText(text){
    const li = document.createElement("li");
    li.className = "items";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = `${text}`;
    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete";
    delBtn.onclick = function(){
        deleteP(delBtn);
    }
    const i = document.createElement("i");
    i.className = "fas fa-times-circle";
    delBtn.appendChild(i);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    showNothing();
    checkbox.onchange = function(){
        handleCheckboxChange(li, checkbox.checked);
    }
}

function saveToDo(text){
    localStorage.setItem(keyid, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentInput = input.value;
    input.value = "";
    addToDoText(currentInput);
}
function showNothing(){
    for(let index = 0; index<allToDoList.length; index++){
        if(allToDoList[index].childElementCount === 0){
            allToDoList[index].nextElementSibling.classList.add('list-active');
        } else{
            allToDoList[index].nextElementSibling.classList.remove('list-active');
        }
    }
}

function init(){
    inputBox.addEventListener("submit", handleSubmit);
    showNothing();
}

init()