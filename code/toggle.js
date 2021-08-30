export function showToggle(){
    console.log('showToggle 실행');
    const allFinishedList = document.querySelectorAll(".list-finished");
    for(let i =0; i<allFinishedList.length; i++){
        const childrenList = allFinishedList[i].children;
        const divElement = allFinishedList[i].firstElementChild;
        let countOfItems = childrenList.length - 1;

        if(countOfItems >3){
            divElement.classList.add('more-show');
            divElement.firstElementChild.className = "fas fa-caret-right";
            for(let k=1; k<childrenList.length; k++){
                childrenList[k].classList.add('list-finished-hide');
            }
        } else{
            divElement.classList.remove('more-show');
            divElement.firstElementChild.className = "fas fa-caret-down";
            for(let k=1; k<childrenList.length; k++){
                childrenList[k].classList.remove('list-finished-hide');
            }
        }
    }
}

//function createEventListner(){ //카테고리를 생성할 때마다 특정
//    console.log('createElementListener 실행')
//    const moreElement = document.querySelectorAll(".more");
//    for(let i=0; i<moreElement.length; i++){
//        moreElement[i].addEventListener('click', ()=>{
//            moreClickHandler(moreElement[i]);
//        })
//    }
//}

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
            finishedElement.children[k].classList.add("list-finished-hide");
        }
    }
}
