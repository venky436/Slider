let silder = document.querySelector(".slider");
let images = document.querySelectorAll(".img");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

// Dots
let dots = document.querySelectorAll(".one");

let count = 0;
let size = images[0].clientWidth;

silder.style.transform = `translateX(${-(size * count)}px)`;

// Right Button functionality
right.addEventListener("click", () => {
  if (count >= images.length - 1)return
   
  
    

  silder.style.transition = `transform 0.5s ease-in-out`;
  count++;
  silder.style.transform = `translateX(${-(size * count)}px)`;
  dots.forEach((ele, index) => {
    if (count == index) {
      ele.style.width = "30px";
      ele.style.height = '30px'
    } else {
      ele.style.width = "20px";
      ele.style.height = "20px";

    }
  });
});

// left Button Functionality
left.addEventListener("click", () => {
  if (count === 0) return;

  silder.style.transition = `transform 0.5s ease-in-out`;
  count--;
  silder.style.transform = `translateX(${-(size * count)}px)`;
  dots.forEach((ele, index) => {
    if (count == index) {
      ele.style.width = "30px";
      ele.style.height = "30px";

    } else {
      ele.style.width = "20px";
      ele.style.height = "20px";

    }
  });
});
// silder.addEventListener('transitionend',()=>{

//     if(images[count].id === 'firstNode'){
//         silder.style.transition = 'none'
//         count = images.length - count
//         silder.style.transform=`translateX(${-(size*count)}px)`
//     }

//     if (images[count].id === "lastNode") {
//       silder.style.transition = "none";
//       count = images.length - 2;
//       silder.style.transform = `translateX(${-(size * count)}px)`;
//     }

// })

// Dots functionality
dots.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    silder.style.transition = `transform 0.5s ease-in-out`;
    count = index;
    silder.style.transform = `translateX(${-(size * count)}px)`;
    console.log(ele);

    dots.forEach((ele) => {
      if (e.target.id === ele.id) {
        ele.style.width = "30px";
      ele.style.height = "30px";

      } else {
        ele.style.width = "20px";
      ele.style.height = "20px";

      }
    });
  });
});
