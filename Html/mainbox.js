const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const $todoContainer = $('#main-container');

searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
})

function deleteP(child){
    let parent = child.parentNode;
    parent.parentNode.removeChild(parent);
}