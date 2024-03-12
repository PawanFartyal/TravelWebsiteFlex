const toggleBtn = document.querySelector('.toggle');
const sidebar =document.querySelector('.sidebar');
const close =document.querySelector('.close')
toggleBtn.addEventListener("click",()=>{
    sidebar.classList.add('showSidebar');
})
close.addEventListener("click",()=>{
    sidebar.classList.remove('showSidebar');
})
