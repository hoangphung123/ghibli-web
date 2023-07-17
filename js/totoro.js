const passwordInput = document.getElementById('passwordInput');
const passwordLabel = document.querySelector('.input-box__password');
const backgrounds = document.querySelectorAll('.animation img');


let isWriting = false;
let currentBackground = 1;
let animationFrameId;
const animationDelay = 100;

passwordLabel.addEventListener('click', () => {
    passwordInput.focus();
});

passwordInput.addEventListener('focus', () => {
    if (!isWriting) {
        isWriting = true;
        passwordLabel.classList.add('active');
        animateBackground();
    }
});

passwordInput.addEventListener('blur', () => {
    isWriting = false;
    passwordLabel.classList.remove('active');
    cancelAnimationFrame(animationFrameId);
    setTimeout(() => {
        // Gọi hàm animation reverse sau một khoảng thời gian trễ
        animateBackgroundReverse();
    }, animationDelay);
});



function animateBackground() {
    if (isWriting && currentBackground < backgrounds.length) {
        backgrounds[currentBackground].classList.add('active');
        currentBackground++;
        animationFrameId = requestAnimationFrame(animateBackground);
    } else {
        currentBackground = backgrounds.length - 1;
        backgrounds[currentBackground].classList.add('active');
    }
}

function animateBackgroundReverse() {
    if (currentBackground >= 0) {
        backgrounds[currentBackground].classList.remove('active');
        currentBackground--;
        setTimeout(() => {
            // Gọi hàm animation reverse sau một khoảng thời gian trễ
            animateBackgroundReverse();
        }, animationDelay);
    } else {
        currentBackground = 0;
    }
}


const emailInput = document.querySelector('input[type="email"]');
const emailLabel = emailInput.nextElementSibling;

function isEmailValid(email) {
  // Đây là một hàm đơn giản để kiểm tra địa chỉ email hợp lệ.
  // Bạn có thể sử dụng các phương pháp kiểm tra khác phức tạp hơn nếu cần thiết.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('input', function () {
  if (this.value === '') {
    emailLabel.classList.remove('active', 'invalid');
  } else {
    if (isEmailValid(this.value)) {
      emailLabel.classList.add('active');
      emailLabel.classList.remove('invalid');
    } else {
      emailLabel.classList.add('active', 'invalid');
    }
  }
});
