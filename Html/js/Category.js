init();
let count=3;



function init(){ 
    let add_butt = document.querySelector('#add-nav-btn'); //Q.여기 getelementByid로 하면 왜 오류?
   
    add_butt.addEventListener('click', add_button);  //직접입력 버튼 클릭시
    add_butt.addEventListener('dbclick',db_input); //더블클릭시
    //document.querySelector('.cg_plus').addEventListener('click',add_cg);

   
}



function add_button(e){ //+,X 버튼생성
    e.preventDefault();
    let add_nav_btn = document.querySelector("#add-nav-btn");
    let plus_button = document.createElement("div");
    let btn_plus = document.getElementsByClassName("btn-plus");
    let remove_button = document.createElement("div");
    
    if(e.target.className==='cg_plus'){ //카테고리 추카 폼이면
        add_cg();
    }

    else{ //+,X 버튼생성하는 코드
        plus_button.innerHTML ="<button id='bu'><i class='fas fa-plus-circle'></i></button>";
        //remove_button.innerHTML = "<button class='delete'><i>x</i></button>";
        add_nav_btn.appendChild(plus_button);
        
        for(let i=0; i<btn_plus.length;i++){
            //btn_plus[i].after('X');
            let remove_button = document.createElement("div");
            remove_button.innerHTML = "<button class='delete'><i>x</i></button>";
            btn_plus[i].after(remove_button);
        }
        plus_button.style.display = "block";
        remove_button.style.display = "block"; 
        
        if(plus_button.style.display==='block') {
            add_nav_btn.addEventListener('click',function(){stop_bt(plus_button,remove_button)}); //x,+버튼 계속 안생기도록
            plus_button.addEventListener('click',function(){plus_cg(add_nav_btn)}); //+버튼 눌렀을떄 입력하도록
        }
    }

}

function stop_bt(plus_button,remove_button){ //직접 입력 또 눌러도 버튼 안생기도록함
    plus_button.style.display = "none";
    remove_button.style.display = "none"; 
}


function plus_cg(add_nav_btn){
    add_nav_btn.innerHTML=
    "<form class='cg-form'><input type='text' placeholder='Add category' name='category'><button type= 'submit' ><b class='cg_plus'  >추가</b></button></form>";
    
    
}

 function add_cg(){// 추가 클릭시 카테고리 추가
    let cg_value = document.querySelector('.cg-form');

    if(cg_value.elements[0].value !==""){
        let a_dd = document.querySelector('.nav-btn');
        let li = document.createElement('li');

        li.innerHTML = `<a href = '#'>${cg_value.elements[0].value}</a>`;
        a_dd.appendChild(li);
        li.setAttribute("class","btn-plus")
        document.querySelector('.middle-category').style.display='block';

    }
    cg_value.elements[0].value=""; //입력창 비어주기

}


function db_input(e){ //더블클릭시
    e.preventDefault();
    console.log("double");
}

