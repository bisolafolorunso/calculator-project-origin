const screen = document.getElementById('screen');
const number = document.querySelectorAll(".number");
const operate = document.querySelectorAll(".operate");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");



document.addEventListener('DOMContentLoaded', function() {
    number.forEach(button => {
        button.addEventListener('click', () => {
            screen.value += button.textContent;
        });
    });



    equal.addEventListener('click', () => {
        const result =  eval(screen.value.replace(/[^0-9+/*-.]/g,""));
        screen.value = eval(result);
    });
    

    operate.forEach(button => {
        button.addEventListener('click', () => {
            screen.value += button.textContent;
        });
    });
    
    
    
});

console.log('this');

function printThis(params) {
    console.log('this works')
}


printThis()
