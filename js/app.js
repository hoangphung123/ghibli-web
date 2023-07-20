const button = document.querySelector(".moveButton");
const bgImg = document.querySelector(".bg-img1");
const clickevent1 = document.querySelector(".center")

button.addEventListener("mouseenter", () => {
  // Thay đổi màu của button khi hover
  bgImg.style.boxShadow = "0px 0px 100px 0.1px rgba(95, 215, 159, 0.363), 0 0 100px 0.1px rgba(95, 215, 159, 0.363)"; // Áp dụng hiệu ứng box-shadow cho bg-img1
});

button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = ""; // Đặt lại màu gốc của button khi không hover
  bgImg.style.boxShadow = ""; // Loại bỏ hiệu ứng box-shadow của bg-img1
});

const ghibliItem = document.querySelector(".ghibli__item");
const sensitivity = 30; // Điều chỉnh độ nhạy của hiệu ứng, giá trị càng lớn thì hiệu ứng càng nhạy

ghibliItem.addEventListener("mousemove", (event) => {
  const boundingRect = ghibliItem.getBoundingClientRect();
  const offsetX = event.clientX - boundingRect.left;
  const offsetY = event.clientY - boundingRect.top;

  const centerX = boundingRect.width / 2;
  const centerY = boundingRect.height / 2;

  const rotateX = (offsetY - centerY) / sensitivity;
  const rotateY = (offsetX - centerX) / sensitivity;

  ghibliItem.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

ghibliItem.addEventListener("mouseleave", () => {
  ghibliItem.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
});


let clickCount = 0;
let isAnimating = false;

clickevent1.addEventListener("click", function() {
  clickCount++;
      if (clickCount === 1) {
        animateGhibliItems();
      } else if (clickCount === 2) {
        reverseAnimateGhibliItems();
        clickCount = 0;
      }
});



function animateGhibliItems() {
  if (isAnimating) {
    return;
  }

  const ghibliItem = document.querySelector(".ghibli__item");
  const ghibliItems = document.querySelectorAll(".ghibli__items");

  let translateY = 0;
  const interval = setInterval(frame, 2);

  function frame() {
    if (translateY >= ghibliItem.offsetTop * 5.5) {
      clearInterval(interval);
      
      isAnimating = false;
    } else {
      translateY += 1;
      ghibliItem.style.transform = `translateY(-${translateY}px)`;
    }
  }

  ghibliItems.forEach((item) => {
    const initialOffsetTop = item.offsetTop / 1.25;

    let translateY = 0;
    const itemInterval = setInterval(itemFrame, 2);

    function itemFrame() {
      if (translateY >= initialOffsetTop) {
        clearInterval(itemInterval);
      } else {
        translateY += 1;
        item.style.transform = `translateY(-${translateY}px)`;
      }
    }
  });
 
  isAnimating = true;
}

function reverseAnimateGhibliItems() {
  if (isAnimating) {
    return;
  }

  const ghibliItem = document.querySelector(".ghibli__item");
  const ghibliItems = document.querySelectorAll(".ghibli__items");

  let translateY = ghibliItem.offsetTop * 5;
  const interval = setInterval(frame, 2);

  function frame() {
    if (translateY <= 0) {
      clearInterval(interval);
      
      isAnimating = false;
    } else {
      translateY -= 1;
      ghibliItem.style.transform = `translateY(-${translateY}px)`;
    }
  }

  ghibliItems.forEach((item) => {
    const initialOffsetTop = item.offsetTop / 1.25;

    let translateY = initialOffsetTop;
    const itemInterval = setInterval(itemFrame, 2);

    function itemFrame() {
      if (translateY <= 0) {
        clearInterval(itemInterval);
      } else {
        translateY -= 1;
        item.style.transform = `translateY(-${translateY}px)`;
      }
    }
  });

  isAnimating = true;
}


const button1 = document.querySelector(".moveButtons");
const bgImg1 = document.querySelector(".bg-img2");


button1.addEventListener("mouseenter", () => {
  // Thay đổi màu của button khi hover
  bgImg1.style.boxShadow = "0px 0px 100px 0.1px rgba(123, 74, 77, 0.363), 0 0 100px 0.1px rgba(123, 74, 77, 0.363)"; // Áp dụng hiệu ứng box-shadow cho bg-img1
});

button1.addEventListener("mouseleave", () => {
  button1.style.backgroundColor = ""; // Đặt lại màu gốc của button khi không hover
  bgImg1.style.boxShadow = ""; // Loại bỏ hiệu ứng box-shadow của bg-img1
});

const ghibliItems = document.querySelector(".ghibli__items");
// Điều chỉnh độ nhạy của hiệu ứng, giá trị càng lớn thì hiệu ứng càng nhạy

ghibliItems.addEventListener("mousemove", (event) => {
  const boundingRect = ghibliItems.getBoundingClientRect();
  const offsetX = event.clientX - boundingRect.left;
  const offsetY = event.clientY - boundingRect.top;

  const centerX = boundingRect.width / 2;
  const centerY = boundingRect.height / 2;

  const rotateX = (offsetY - centerY) / sensitivity;
  const rotateY = (offsetX - centerX) / sensitivity;

  ghibliItems.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

ghibliItems.addEventListener("mouseleave", () => {
  ghibliItems.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
});















