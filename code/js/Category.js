import { makeToDoBox, makeButtonInToCategoryList } from "./Category-mainbox.js";

init();


function init() {
    let add_butt = document.querySelector('#add-nav-btn'); //Q.여기 getelementByid로 하면 왜 오류?
    let nav_btn = document.querySelector('.nav-btn');


    add_butt.addEventListener('click', add_button);  //edit 버튼 클릭시
    nav_btn.addEventListener('click', cg_click); //카테고리 제거, 선택 카테고리만 보이도록

}



function add_button(e) { //+,X 버튼생성
    e.preventDefault();

    let add_nav_btn = document.querySelector("#add-nav-btn");
    let plus_button = document.querySelector(".bu-plus");
    let back_button = document.querySelector(".bu-back")
    let remove_button = document.querySelectorAll(".cg-remove");
    let bt = document.querySelectorAll(".bt");
    let todo_box = document.getElementsByClassName("todo-box");


    if (e.target.className === 'cg_plus') { //카테고리 추카 폼이면
        add_cg();
    }

    else { //+,X 버튼생성하는 코드

        plus_button.classList.add('show');
        back_button.classList.add('show');


        for (let i = 0; i < remove_button.length; i++) {
            remove_button[i].classList.add('show'); //=버튼 생성
        }
        for (let i = 0; i < bt.length; i++) {//카테고리 색상 없애기
            bt[i].classList.remove('color');
        }
        for (let i = 0; i < todo_box.length; i++) {//카테고리 todo_box ALL로 설정
            todo_box[i].style.display = "block";
        }

        plus_button.addEventListener('click', function () { plus_cg(add_nav_btn) });                            //+버튼 눌렀을떄 입력하도록
        back_button.addEventListener('click', function () { back_cg(add_nav_btn, back_button, plus_button) });  //back버튼 누르면


    }
}


function plus_cg(add_nav_btn) {//카테고리 추카창 innerHtml로
    add_nav_btn.innerHTML =
        "<form class='cg-form'><input type='text' placeholder='Add category' name='category'><button type= 'submit' ><b class='cg_plus'>Add</b></button></form>";

}



function back_cg(add_nav_btn, back_button, plus_button) {
    let cg_rv = document.querySelectorAll(".cg-remove")
    let bt = document.querySelectorAll(".bt");

    add_nav_btn.innerHTML = `<button class="add-nav-btn">Edit <i class="fas fa-folder-plus"></i></button>`;
    back_button.classList.remove('show');
    plus_button.classList.remove('show');
    for (let i = 0; i < cg_rv.length; i++) {
        cg_rv[i].classList.remove('show');
    }


    bt[0].classList.add('color');

}



function showNothing() {
    const allToDoList = document.querySelectorAll(".list");
    console.log(allToDoList);
    for (let index = 0; index < allToDoList.length; index++) {
        if (allToDoList[index].childElementCount === 0) {
            //console.log(allToDoList[index].childElementCount);
            allToDoList[index].nextElementSibling.classList.add('list-active');
        } else {
            allToDoList[index].nextElementSibling.classList.remove('list-active');
        }
    }
}

function add_cg() {// 추가 클릭시 카테고리 추가
    let cg_value = document.querySelector('.cg-form');
    let btn_plus = document.querySelectorAll('.btn-plus');


    if (cg_value.elements[0].value !== "") {
        let a_dd = document.querySelector('.nav-btn');
        let li = document.createElement('li');

        makeToDoBox(cg_value.elements[0].value);
        makeButtonInToCategoryList(cg_value.elements[0].value);
        showNothing()

        li.innerHTML = `<a href = '#' class='bt'>${cg_value.elements[0].value}<button class="cg-remove"><i class='fas fa-times-circle' id='rv-em'></i></button></a>`;
        a_dd.appendChild(li);
        li.setAttribute("class", "btn-plus")
        li.setAttribute("id", btn_plus.length);

        let remove_button = document.querySelectorAll('.cg-remove');

        for (let i = 0; i < remove_button.length; i++) {
            remove_button[i].classList.add('show');
        }

        document.querySelector('.middle-category').style.display = 'block';


    }
    cg_value.elements[0].value = ""; //입력창 비어주기
    showNothing();
}




function cg_click(e) { //edit 클릭시
    if (e.target.id == 'rv-em') { //카테고리 x버튼 클릭하는 경우
        let cg_remove = confirm("카테고리를 삭제하시겠습니까?");
        if (cg_remove) {
            let remove = e.target.parentNode.parentNode.parentNode;
            let parentnode = remove.parentNode;

            let rv_id = remove.id - 1;
            let todo_box = document.querySelectorAll(".todo-box");
            let input_box = document.querySelectorAll(".category-list-button");



            parentnode.removeChild(remove);
            todo_box[rv_id].parentNode.removeChild(todo_box[rv_id]);
            input_box[rv_id].parentNode.removeChild(input_box[rv_id]);



        }
        else {
            console.log("Not delete")
        }
    } else if (e.target.className == 'bt') {//카테고리 클릭하는 경우(ALL 제외)  
        cg_box(e.target.parentNode.id);

        //x버튼 없을때만 카테고리 볼 수 있도록 설정

    }
}



function cg_box(id_value) { //카테고리 선택하면 그것만 보이도록 함
    let todo_box = document.getElementsByClassName("todo-box");
    let bt = document.getElementsByClassName("bt");
    let bu_plus = document.querySelector(".bu-plus");


    if (!bu_plus.classList.contains('show')) {
        if (id_value != 0) {
            for (let i = 0; i < todo_box.length; i++) {//카테고리 todo_box 보이는거 설정
                todo_box[i].style.display = "none";
            }
            todo_box[id_value - 1].style.display = "block";
        } else {
            for (let i = 0; i < todo_box.length; i++) {//카테고리 todo_box 보이는거 설정
                todo_box[i].style.display = "block";
            }
        }



        for (let i = 0; i < bt.length; i++) {//카테고리 선택시 color 변경
            bt[i].classList.remove('color');
        }
        bt[id_value].classList.add('color');


    }


}
