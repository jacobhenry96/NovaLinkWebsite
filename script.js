const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");
const project5 = document.querySelector(".project5");

const portfolioImg = document.querySelector("#portfolio-img");

images = [
    "images/Screenshot 2024-10-31 221511.png",
    "images/Screenshot 2024-10-31 221811.png",
    "images/Screenshot 2024-10-31 221854.png",
    "images/Screenshot 2024-10-31 221948.png",
    "images/Screenshot 2024-11-10 220619.png"
]
let currentIndex = 0;

project1.addEventListener('click', () => {
    portfolioImg.src = "images/Screenshot 2024-10-31 221511.png"
});
project2.addEventListener('click', () => {
    portfolioImg.src = "images/Screenshot 2024-10-31 221811.png"
});
project3.addEventListener('click', () => {
    portfolioImg.src = "images/Screenshot 2024-10-31 221854.png"
});
project4.addEventListener('click', () => {
    portfolioImg.src = "images/Screenshot 2024-10-31 221948.png"
});
project5.addEventListener('click', () => {
    portfolioImg.src = "images/Screenshot 2024-11-10 220619.png"
});


//Rotates Images Every Few Seconds
function changeImage() {
    portfolioImg.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; 
  }
  
setInterval(changeImage, 4000);



