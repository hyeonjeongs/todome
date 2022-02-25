const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const addTodoForm = document.querySelector('.add-container');
const logoutBtn = document.querySelector("#log-out");
const selectedCategory = document.querySelector('#selected-category');
const categoryList = document.querySelector(".category-list");
const searchKeyword = document.querySelector("#search-keyword");
const resetButton = document.querySelector("#reset-btn");
const okButton = document.querySelector(".ok-btn");


<<<<<<< HEAD
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

function deleteP(child) {
=======
searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
});

function deleteP(child){
>>>>>>> integrated-branch
    let parent = child.parentNode;
    parent.parentNode.removeChild(parent);
}

<<<<<<< HEAD
function showAddTodoForm() {
    addTodoForm.classList.toggle('active');
}

function showCategoryList() {
    const hasClass = categoryList.classList.contains('cartegory-list-showing');
    if (hasClass === false) {
        categoryList.classList.add('cartegory-list-showing');
    } else {
=======
function showAddTodoForm(){
    addTodoForm.classList.toggle('active');
}

function showCategoryList(){
    const hasClass = categoryList.classList.contains('cartegory-list-showing');
    if(hasClass === false){
        categoryList.classList.add('cartegory-list-showing');
    } else{
>>>>>>> integrated-branch
        categoryList.classList.remove('cartegory-list-showing');
    }
    //categoryList.classList.toggle('cartegory-list-showing');
}

<<<<<<< HEAD
function selectCategory(buttonClass) {
=======
function selectCategory(buttonClass){
>>>>>>> integrated-branch
    selectedCategory.innerText = buttonClass;
    showCategoryList()
}

logoutBtn.addEventListener('click', () => {
<<<<<<< HEAD
    window.location.href = "./index.html"
=======
    window.location.href="./index.html"
>>>>>>> integrated-branch
});

// x버튼 보이기
function showResetButton() {
    const value = document.getElementById('search-keyword').value;
<<<<<<< HEAD
    if (value.length > 0) {
=======
    if(value.length > 0) {
>>>>>>> integrated-branch
        resetButton.style.display = 'initial';
    } else {
        resetButton.style.display = 'none';
        let todoBox = document.getElementsByClassName("todo-box");
<<<<<<< HEAD
        for (let i = 0; i < todoBox.length; i++) {
=======
        for(let i=0; i<todoBox.length; i++) {
>>>>>>> integrated-branch
            todoBox[i].style.display = "block";
        }
    }
};

resetButton.addEventListener('click', () => {
    searchKeyword.value = "";
    showResetButton();
});

// 결과화면 보이기
function showResult() {
    const keyword = document.getElementById('search-keyword').value;
    let todoBox = document.getElementsByClassName("todo-box");
    let items = document.getElementsByClassName("items");
<<<<<<< HEAD
    for (let i = 0; i < items.length; i++) {
        const text = `${items[i].textContent}`;
        if (keyword === text) {
            console.log("right");
            for (let i = 0; i < todoBox.length; i++) {
=======
    for(let i=0; i<items.length; i++) {
        const text = `${items[i].textContent}`;
        if(keyword === text) {
            console.log("right");
            for(let i=0; i<todoBox.length; i++) {
>>>>>>> integrated-branch
                todoBox[i].style.display = "none";
            }
            items[i].parentNode.parentNode.style.display = "block";
            return;
        }
    }
    alert("검색 결과가 없습니다.");
};

// 검색 엔터 이벤트
function enterKey() {
<<<<<<< HEAD
    if (window.event.keyCode == 13) {
=======
    if(window.event.keyCode == 13) {
>>>>>>> integrated-branch
        this.showResult();
    }
};

<<<<<<< HEAD
searchKeyword.addEventListener('keyup', () => { showResetButton(), enterKey() });
=======
searchKeyword.addEventListener('keyup', () => {showResetButton(), enterKey()});
>>>>>>> integrated-branch

okButton.addEventListener('click', () => { showResult() });
