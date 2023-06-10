let first = document.querySelector('.first');
function hello1(){
    first.classList.add('hello1');
    first.classList.remove('hello2');
first.classList.remove('hello3');
first.classList.remove('hello4');
};
function hello2(){
    first.classList.add('hello2');
    first.classList.remove('hello1');
first.classList.remove('hello3');
first.classList.remove('hello4');
};function hello3(){
    first.classList.add('hello3');
    first.classList.remove('hello2');
first.classList.remove('hello1');
first.classList.remove('hello4');
};function hello4(){
    first.classList.add('hello4');
    first.classList.remove('hello3');
first.classList.remove('hello2');
first.classList.remove('hello1');
};

const menuBtn = document.querySelector(".menu-mobile-btn");
const menuWrapper = document.querySelector(".menu-wrappper");

menuBtn.addEventListener("click", function () {
  menuWrapper.classList.toggle("show-menu");
  menuBtn.classList.toggle("fa-solid fa-bars");
});

