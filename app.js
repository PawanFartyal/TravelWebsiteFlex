const toggleBtn = document.querySelector('.toggle');
const sidebar =document.querySelector('.sidebar');
const close =document.querySelector('.close')
toggleBtn.addEventListener("click",()=>{
    sidebar.classList.add('showSidebar');
    document.body.style.overflow="hidden";
})
close.addEventListener("click",()=>{
    sidebar.classList.remove('showSidebar');
    document.body.style.overflow="visible";
})
window.addEventListener("click",(e)=>{
    if(!e.target.closest(".sidebar") && !e.target.closest(".toggle")){
        sidebar.classList.remove('showSidebar');
        document.body.style.overflow="visible";
    }

})