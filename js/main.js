const menuToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('footer');
const navItems = document.querySelectorAll(".nav-item");
const mainItems = document.querySelectorAll(".main-item");

const LENGTH = navItems.length;

// navbar hidden 
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// switch pages according to the navbar, and highlight the activated nav item.
for(let i = 0; i < LENGTH; i++) {
    navItems[i].addEventListener("click", () => {
        for(let j = 0; j < LENGTH; j++) {
            if (j != i) {
                navItems[j].classList.remove("active");
                mainItems[j].classList.remove("active");
                footer.style.display = "none";
                mainItems[j].style.opacity = "0";
                mainItems[j].style.transform = "scale(0)";
            }
        }
        navItems[i].classList.add("active");
        mainItems[i].classList.add("active");
        if(i == LENGTH - 1) { footer.style.display = "block"; }
        mainItems[i].offsetHeight; // 触发js渲染队列更新，实现display：none到display：block的动画效果
        mainItems[i].style.opacity = "1";
        mainItems[i].style.transform = "scale(1)";

        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
    });
}


