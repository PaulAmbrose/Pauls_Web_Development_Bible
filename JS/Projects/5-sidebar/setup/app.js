const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    console.log("click recoreded");
    sideBar.classList.toggle('.show-sidebar');
});