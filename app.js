const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


function colorChange(){
    const randomNumber = getRandomNumber();
    function getRandomNumber() {
          return Math.floor(Math.random() * colors.length);
        }

   document.body.style.background = colors[randomNumber]
    document.querySelector('.color').textContent = colors[randomNumber];

}
// [Math.floor(Math.random() * colors.length)];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
