const cc_display = document.getElementById('computer_choice');
const yc_display = document.getElementById('your_choice');
const r_display = document.getElementById('result');

const buttons = document.querySelectorAll('button');

let yc;
let ch;
let res;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        yc = e.target.id;
        yc_display.innerHTML = yc;
        displayComputer();
        displayResult();
    });
});

const displayComputer = () => {
    const n = Math.floor(Math.random()*3) + 1;
    if(n===1){
        ch = 'Rock';
    }else if(n===2){
        ch = 'Paper';
    }else{
        ch = 'Scissor';
    }

    cc_display.innerHTML = ch;
}

const displayResult = () => {
    if(yc === ch){
        res = "It's a draw";
    }else if((yc === 'Rock' && ch === 'Paper')
    || (yc === 'Scissor' && ch === 'Rock') 
    || (yc === 'Paper' && ch === 'Scissor')){
        res = 'Computer Won';
    }else{
        res = 'You Won!!';
    }

    r_display.innerHTML = res;
}