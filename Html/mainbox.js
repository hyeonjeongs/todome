const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const addTodoForm = document.querySelector('.add-container')

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