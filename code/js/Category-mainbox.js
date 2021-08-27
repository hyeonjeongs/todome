const mainContainer = document.querySelector("#main-container");
const CategoryList = document.querySelector(".category-list");

function makeToDoBox(categoryName){ //메인 박스에 들어갈 투두박스를 만드는 함수
    const divToDoBox = document.createElement("div");
    divToDoBox.className = "todo-box";
    divToDoBox.classList.add(categoryName); //카테고리 이름을 클래스에 추가해서 찾는 방식을 제안함다.

    const divBoxName = document.createElement("div");
    divBoxName.className = "box-name";
    const a = document.createElement("a");
    a.href = "#";
    a.className = categoryName;
    a.innerText = categoryName;
    divBoxName.appendChild(a);

    const ulList = document.createElement("ul");
    ulList.className = "list";

    const ulListEmpty = document.createElement("ul");
    ulListEmpty.className = "list-empty";
    const liNoItems = document.createElement("li");
    liNoItems.className = "no-items";
    ulListEmpty.appendChild(liNoItems);

    const ulListFinished = document.createElement("ul");
    ulListFinished.className = "list-finished";

    divToDoBox.appendChild(divBoxName);
    divToDoBox.appendChild(ulList);
    divToDoBox.appendChild(ulListEmpty);
    divToDoBox.appendChild(ulListFinished);

    mainContainer.appendChild(divToDoBox);
}

function makeButtonInToCategoryList(categoryName){
    const button = document.createElement("button");
    button.innerText = categoryName;
    CategoryList.appendChild(button);
}