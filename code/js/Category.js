init();
count=1;//카테고리 개수 count
edit=1; // 버튼 생성 도와주는 변수



function init(){ 
    let add_butt = document.querySelector('#add-nav-btn'); //Q.여기 getelementByid로 하면 왜 오류?
    let nav_btn = document.querySelector('.nav-btn');

    add_butt.addEventListener('click', add_button);  //edit 버튼 클릭시
    nav_btn.addEventListener('click',cg_click); //카테고리 제거, 선택 카테고리만 보이도록
   
}



function add_button(e){ //+,X 버튼생성
    e.preventDefault();
    let add_nav_btn = document.querySelector("#add-nav-btn");
    let plus_button = document.createElement("div");
    let back_button = document.createElement("div");
    let btn_plus = document.getElementsByClassName("bt");



    if(e.target.className==='cg_plus'){ //카테고리 추카 폼이면
        add_cg();
    }

    else{ //+,X 버튼생성하는 코드
        if(edit==1){

            back_button.innerHTML="<button class='bu-back'><i class='fas fa-arrow-alt-circle-left'></i></button>";
            add_nav_btn.after(back_button); //뒤로가기 버튼 생성
            back_button.style.display = "block";

            plus_button.innerHTML ="<button class='bu-plus'><i class='fas fa-plus-circle'></i></button>";
            add_nav_btn.after(plus_button); //+ 버튼 생성
            plus_button.style.display = "block";

            rv_bt();//엑스 버튼 생성하는 함수  

            if(plus_button.style.display=='block') {
                plus_button.addEventListener('click',function(){plus_cg(add_nav_btn)}); //+버튼 눌렀을떄 입력하도록
                back_button.addEventListener('click',function(){back_cg(add_nav_btn,back_button,plus_button)});
            }

            edit=0;
         }

        else{
            console.log("main");
        }
     

    }
}

function rv_bt(){//x 버튼 생성
    let btn_plus = document.getElementsByClassName("bt");
        for(let i=count; i<btn_plus.length;i++){ 
            remove_button = document.createElement("button");
            remove_button.setAttribute("class","cg-remove");
            remove_button.setAttribute("style","block");
            remove_button.innerHTML = "<i class='fas fa-times-circle' id='rv-em'></i>";
            btn_plus[i].append(remove_button);

    }
    count = btn_plus.length;
}



function plus_cg(add_nav_btn){//카테고리 추카창 innerHtml로
    add_nav_btn.innerHTML=
    "<form class='cg-form'><input type='text' placeholder='Add category' name='category'><button type= 'submit' ><b class='cg_plus'  >Add</b></button></form>";
     
    let mid = document.querySelector("#main-container");
    mid.classList.add('size');
}



function back_cg(add_nav_btn,back_button,plus_button){
    add_nav_btn.innerHTML =  `<button class="add-nav-btn">Edit <i class="fas fa-folder-plus"></i></button>`;
    back_button.style.display = "none";
    plus_button.style.display = "none";
    let cg_rv = document.querySelectorAll(".cg-remove");
    
    for(let i=0;i<cg_rv.length;i++){
        cg_rv[i].style.display = "none";
    }

    let mid = document.querySelector("#main-container");
    mid.classList.remove('size');

    edit=1;
    count=1;
}



function add_cg(){// 추가 클릭시 카테고리 추가
    let cg_value = document.querySelector('.cg-form');

    if(cg_value.elements[0].value !==""){
        let a_dd = document.querySelector('.nav-btn');
        let li = document.createElement('li');

        li.innerHTML = `<a href = '#' class='bt'>${cg_value.elements[0].value}</a>`;
        a_dd.appendChild(li);
        li.setAttribute("class","btn-plus")
        li.setAttribute("id",count);

        document.querySelector('.middle-category').style.display='block';
        rv_bt(); //추카한 카테고리에 x버튼 추가

    }
    cg_value.elements[0].value=""; //입력창 비어주기

}




function cg_click(e){ //edit 클릭시
    if(e.target.id =='rv-em'){ //카테고리 x버튼 클릭하는 경우
        let cg_remove = confirm("카테고리를 삭제하시겠습니까?");
        if(cg_remove){
            let remove = e.target.parentNode.parentNode.parentNode;
            let parentnode = remove.parentNode;
            parentnode.removeChild(remove);
            count--;
        }
        else{
            console.log("Not delete")
        }
    }else if(e.target.className =='bt' && e.target.parentNode.id !=0){//카테고리 클릭하는 경우(ALL 제외)  
        cg_box(e.target.parentNode.id);
        //x버튼 없을때만 카테고리 볼 수 있도록 설정
    
    }
}

function cg_box_all(th){//카테고리 전체보기
    let todo_box = document.getElementsByClassName("todo-box");
    for(let i =0;i<todo_box.length;i++){
        todo_box[i].style.display="block";
    }

}

function cg_box(id_value){ //카테고리 선택하면 그것만 보이도록 함
    let todo_box = document.getElementsByClassName("todo-box");
 
    for(let i =0;i<todo_box.length;i++){
        todo_box[i].style.display="none";
    }
    
    todo_box[id_value-1].style.display = "block";

    

}
