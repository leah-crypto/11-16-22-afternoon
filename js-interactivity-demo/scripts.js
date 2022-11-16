console.log("Js");

let counter = document.querySelector("#counter");
let count = 0;
let plusBtn = document.querySelector('#plus-btn');
let minusBtn = document.querySelector("#minus-btn");
let resetBtn= document.querySelector("#reset-btn");

const increment = () =>{
    count++;
    counter.textContent = count;
    console.log(count);
};

const decrement = ()=>{

if(count > 0){
    count--;
    counter.textContent = count;
    console.log(count);
}


const reset = () =>{
    count = 0;
    counter.textContent = count;
    console.log(count);
}

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

button = document.querySelectorAll(".theme-buttons");
//console.log(button);

for(i = 0; i < button.length; i ++){
    button[i].addEventListener("click", selectThemes);
}


function selectThemes(event){
    const theme = event.target.textContent;
    console.log(theme);
    
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("button");

    for(let i = 0; i < buttons.length; i ++){
        buttons[i].className = theme;
    }
}
