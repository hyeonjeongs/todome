const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const addTodoForm = document.querySelector('.add-container');
const logoutBtn = document.querySelector("#logout-btn");
const cartegoryList = document.querySelector('.category-list');

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
    cartegoryList.classList.toggle('active');
}

logoutBtn.addEventListener('click', () => {
    window.location.href="./index.html"
});
