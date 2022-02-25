const mainContainer = document.querySelector("#main-container");
const CategoryList = document.querySelector(".category-list");

<<<<<<< HEAD
export function makeToDoBox(categoryName) { //메인 박스에 들어갈 투두박스를 만드는 함수
=======
export function makeToDoBox(categoryName){ //메인 박스에 들어갈 투두박스를 만드는 함수
>>>>>>> integrated-branch
    const divToDoBox = document.createElement("div");
    divToDoBox.className = "todo-box";
    divToDoBox.classList.add(categoryName); //카테고리 이름을 클래스에 추가해서 찾는 방식을 제안함다.

    const divBoxName = document.createElement("div");
    divBoxName.className = "box-name";
    const a = document.createElement("a");
    //a.href = "#";
    a.className = categoryName;
    a.innerText = categoryName;
    divBoxName.appendChild(a);

    const ulList = document.createElement("ul");
    ulList.className = "list";

    const ulListEmpty = document.createElement("ul");
    ulListEmpty.className = "list-empty";
    const liNoItems = document.createElement("li");
    liNoItems.className = "no-items";
    liNoItems.innerText = "nothing";
    ulListEmpty.appendChild(liNoItems);

    const ulListFinished = document.createElement("ul");
    ulListFinished.className = "list-finished";

    const divMore = document.createElement("div");
    divMore.className = "more";
    const iToggle = document.createElement("i");
    iToggle.className = "fas fa-caret-right";
    const spanMore = document.createElement("span");
    spanMore.innerText = " 더보기";
    divMore.appendChild(iToggle);
    divMore.appendChild(spanMore);
<<<<<<< HEAD
    divMore.addEventListener('click', () => {
=======
    divMore.addEventListener('click', ()=>{
>>>>>>> integrated-branch
        moreClickHandler(divMore);
    })
    ulListFinished.prepend(divMore);

    divToDoBox.appendChild(divBoxName);
    divToDoBox.appendChild(ulList);
    divToDoBox.appendChild(ulListEmpty);
    divToDoBox.appendChild(ulListFinished);
    divBoxName.addEventListener('click', () => {//box이름 버튼 클릭
        let todoBox = document.getElementsByClassName("todo-box");
        let bt = document.getElementsByClassName("bt");
        let bu_plus = document.querySelector(".bu-plus");

<<<<<<< HEAD
        if (!bu_plus.classList.contains('show')) {
            for (let i = 0; i < todoBox.length; i++) {
                todoBox[i].style.display = "none";
            }
            divBoxName.parentNode.style.display = "block";

            for (let i = 0; i < bt.length; i++) {//카테고리 선택시 color 변경
                bt[i].classList.remove('color');
                if (bt[i].innerText == categoryName) {
=======
        if(!bu_plus.classList.contains('show')) {
            for(let i=0; i<todoBox.length; i++) {
                todoBox[i].style.display = "none";
            }
            divBoxName.parentNode.style.display = "block";
    
            for(let i=0;i<bt.length;i++){//카테고리 선택시 color 변경
                bt[i].classList.remove('color');
                if(bt[i].innerText == categoryName) {
>>>>>>> integrated-branch
                    bt[i].classList.add('color');
                }
            }
        }

<<<<<<< HEAD

=======
        
>>>>>>> integrated-branch
    });


    mainContainer.appendChild(divToDoBox);
}

<<<<<<< HEAD
export function makeButtonInToCategoryList(categoryName) {
    const button = document.createElement("button");
    let btn_plus = document.querySelectorAll(".btn-plus");
    button.id = btn_plus.length - 1;
    button.className = "category-list-button";
    button.innerText = categoryName;
    button.onclick = function () {
=======
export function makeButtonInToCategoryList(categoryName){
    const button = document.createElement("button");
    let btn_plus = document.querySelectorAll(".btn-plus");
    button.id = btn_plus.length -1;
    button.className = "category-list-button";
    button.innerText = categoryName;
    button.onclick = function(){
>>>>>>> integrated-branch
        selectCategory(categoryName);
    }
    CategoryList.appendChild(button);
}

<<<<<<< HEAD
function moreClickHandler(target) {
    if (target.firstElementChild.className === "fas fa-caret-right") {
        target.firstElementChild.className = "fas fa-caret-down";
        const finishedElement = target.parentElement;
        const childcount = finishedElement.childElementCount;
        for (let k = 1; k < childcount; k++) {
            finishedElement.children[k].classList.remove("list-finished-hide");
        }
    } else if (target.firstElementChild.className === "fas fa-caret-down") {
        target.firstElementChild.className = "fas fa-caret-right";
        const finishedElement = target.parentElement;
        const childcount = finishedElement.childElementCount;
        for (let k = 1; k < childcount; k++) {
=======
function moreClickHandler(target){
    if(target.firstElementChild.className === "fas fa-caret-right"){
        target.firstElementChild.className = "fas fa-caret-down";
        const finishedElement = target.parentElement;
        const childcount = finishedElement.childElementCount;
        for(let k=1; k<childcount; k++){
            finishedElement.children[k].classList.remove("list-finished-hide");
        }
    } else if(target.firstElementChild.className === "fas fa-caret-down"){
        target.firstElementChild.className = "fas fa-caret-right";
        const finishedElement = target.parentElement;
        const childcount = finishedElement.childElementCount;
        for(let k=1; k<childcount; k++){
>>>>>>> integrated-branch
            finishedElement.children[k].classList.add("list-finished-hide");
        }
    }
}
