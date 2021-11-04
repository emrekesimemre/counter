let number = 0;
let value = document.querySelector(".value");
let buttons = document.querySelectorAll(".btn");
// let decrease = document.querySelector(".decrease");
// let increase = document.querySelector(".increase")
// let reset = document.querySelector("reset");

let randomNumber = () => Math.floor(Math.random()*256);
let randomColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
console.log(randomColor());

buttons.forEach( (btn) =>{
    btn.addEventListener("click", (e)=>{
       let active = e.currentTarget.classList; 
       if (active.contains("decrease")) {
           number--;  
       } 
       else if (active.contains("increase")) {
           number++;
       }
       else{
           number = 0
       }
       value.innerText = number;
       if (number < 0) {
           value.style.color = "red";
           document.body.style.backgroundColor = randomColor()
       }
       else if (number > 0) {
           value.style.color = "green";
           document.body.style.backgroundColor = randomColor()
       }
       else{
           value.style.color = "black"
           document.body.style.backgroundColor = "white"

       }
    });
});