const inputBox = document.querySelector(".input-text-box");
const input = inputBox.querySelector("input");
let toDoBox = document.querySelector("#todo-box1");
//const toDoList = toDoBox.querySelector(".list");
//const toDoText = toDoList.querySelector("span");

const TODO = "toDoThing"

const getCategoryName = document.querySelector("#selected-category");
const mainContainer = document.querySelector("#main-container");
const addTodoForm = document.querySelector('.add-container');

function deleteP(child){
    let parent = child.parentNode;
    parent.parentNode.removeChild(parent);
    showNothing();
}

function handleCheckboxChange(target, checkornot, ourToDoList){
    if(checkornot === true){
        const targetParentNode = target.parentNode;
        const targetPNextSibling = targetParentNode.nextElementSibling;
        const listFinished = targetPNextSibling.nextElementSibling;
        listFinished.appendChild(target);
        showNothing();
    } else{
        ourToDoList.appendChild(target);
        showNothing();
    }
}

function addToDoText(text, categoryName){
    const ourToDoBox = findToDoBoxWithCategoryName(categoryName);
    const ourToDoList = ourToDoBox.querySelector(".list");
    console.log(ourToDoBox);
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
    ourToDoList.appendChild(li);
    showNothing();
    checkbox.onchange = function(){
        handleCheckboxChange(li, checkbox.checked, ourToDoList);
    }
}

function saveToDo(text){
    localStorage.setItem(keyid, text);
}

function findToDoBoxWithCategoryName(categoryName){
    const children = mainContainer.children;
    let ourToDoBox;
    for(let i=0; i<children.length; i++){
        if(children[i].classList.contains(categoryName) === true){
            ourToDoBox = children[i];
        }
    }
    return ourToDoBox;
}

function showAddTodoForm(){
    addTodoForm.classList.toggle('active');
}

function handleSubmit(event){
    event.preventDefault();
    const currentInput = input.value;
    const categoryName = getCategoryName.innerText;//선택한 카테고리 이름.
    input.value = "";
    addToDoText(currentInput, categoryName);
    showAddTodoForm();
}
function showNothing(){
    
    const allToDoList = document.querySelectorAll(".list");
    console.log(allToDoList);
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