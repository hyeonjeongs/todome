const searchBtn = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');


searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
})
