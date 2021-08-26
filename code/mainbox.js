const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const addTodoForm = document.querySelector('.add-container');
const logoutBtn = document.querySelector("#log-out");
const categoryList = document.querySelector(".category-list");
const searchKeyword = document.querySelector("#search-keyword");
const resetButton = document.querySelector("#reset-btn");
const okButton = document.querySelector(".ok-btn");
//const 


searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
});

function deleteP(child){
    let parent = child.parentNode;
    parent.parentNode.removeChild(parent);
}

function showAddTodoForm(){
    addTodoForm.classList.toggle('active');
}

function showCategoryList(){
    categoryList.classList.toggle('cartegory-list-showing');
}

logoutBtn.addEventListener('click', () => {
    window.location.href="./index.html"
});

function showResetButton() {
    const value = document.getElementById('search-keyword').value;
    if(value.length > 0) {
        resetButton.style.display = 'initial';
    } else {
        resetButton.style.display = 'none';
        let todoBox = document.getElementsByClassName("todo-box");
        for(let i=0; i<todoBox.length; i++) {
            todoBox[i].style.display = "block";
        }
    }
};

resetButton.addEventListener('click', () => {
    searchKeyword.value = "";
    showResetButton();
});

function showResult() {
    const keyword = document.getElementById('search-keyword').value;
    let todoBox = document.getElementsByClassName("todo-box");
    if(keyword == "밥 먹기") {
        for(let i=0; i<todoBox.length; i++) {
            todoBox[i].style.display = "none";
        }
        todoBox[0].style.display = "block";
    }
};

function enterKey() {
    if(window.event.keyCode == 13) {
        this.showResult();
    }
};

searchKeyword.addEventListener('keyup', () => {showResetButton(), enterKey()});

okButton.addEventListener('click', () => { showResult() });
