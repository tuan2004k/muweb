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








const loginForm = document.getElementById('login-form');
const contentElement = document.querySelector('.content');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của form

  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  // Kiểm tra tên đăng nhập và mật khẩu
  if (password.length < 8) {
    alert('Mật khẩu phải có ít nhất 8 ký tự.');
  } else if (!password.match(/[A-Z]/)) {
    alert('Mật khẩu phải có ít nhất một chữ cái viết hoa.');
  } else if (!password.match(/[a-z]/)) {
    alert('Mật khẩu phải có ít nhất một chữ cái viết thường.');
  } else if (!password.match(/[0-9]/)) {
    alert('Mật khẩu phải có ít nhất một chữ số.');
  } else {
    // Nếu đăng nhập thành công:
    loginForm.style.display = 'none'; // Ẩn form đăng nhập
    contentElement.style.display = 'block'; // Hiển thị nội dung
  }
});
