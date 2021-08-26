const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
let fadespeed = 300;
const addTodoForm = document.querySelector('.add-container');
const logoutBtn = document.querySelector("#log-out");
const categoryList = document.querySelector(".category-list");
const searchKeyword = document.querySelector("#search-keyword");
const resetButton = document.querySelector("#reset-btn");
const okButton = document.querySelector(".ok-btn");


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

// x버튼 보이기
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

// 결과화면 보이기
function showResult() {
    const keyword = document.getElementById('search-keyword').value;
    let todoBox = document.getElementsByClassName("todo-box");
    let items = document.getElementsByClassName("items");
    for(let i=0; i<items.length; i++) {
        const text = `${items[i].textContent}`;
        if(keyword === text) {
            console.log("right");
            for(let i=0; i<todoBox.length; i++) {
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
    if(window.event.keyCode == 13) {
        this.showResult();
    }
};

searchKeyword.addEventListener('keyup', () => {showResetButton(), enterKey()});

okButton.addEventListener('click', () => { showResult() });
