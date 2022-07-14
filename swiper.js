let btnMore = document.querySelector('.main__further--text--link');
let btnMoreImg = document.querySelector('.main__further--logo')
let slide = document.querySelectorAll('.slider__main--element');
let mainSwiper = document.querySelector('.swiper.mySwiper')
const mq = window.matchMedia( "(min-width: 768px)" );

// if (mq.matches) {
//        mainSwiper.classList.remove('mySwiper');
//        mainSwiper.classList.remove('swiper-initialized');
//        mainSwiper.classList.remove('swiper-horizontal');
//        mainSwiper.classList.remove('swiper-pointer-events');
// } else {
//     mainSwiper.classList.add('mySwiper')
// }


btnMore.addEventListener("click", function () {
  let swiper = document.querySelector(".swiper");
  const initialText = "Показать все";

  if (btnMore.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btnMore.textContent = "Скрыть";
    btnMore.style.marginTop = "40px";
    btnMore.style.marginLeft = "-3px";
    btnMoreImg.style.marginTop = "45px";
    btnMoreImg.style.transform = "rotate(180deg)";
  } else {
    btnMore.textContent = initialText;
    btnMore.style.marginTop = "0px";
    btnMore.style.marginLeft = "0x";
    btnMoreImg.style.marginTop = "7px";
    btnMoreImg.style.transform = "rotate(0deg)";
  }
  
  // if (slide[9].style.display === "none" && screen.width < 1120) {
  //   slide[9].style.display = "block";
  // } else {
  //   slide[9].style.display = "none";
  // }
  
  swiper.classList.toggle("swiper--hidden");
  for (let i = 6; i < 12; i++) {
    slide[i].classList.toggle("hiden");
  }
});


/// remove class mySwiper на 1120;