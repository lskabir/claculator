let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

const add =  () => {
    let total = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + total
};

const subtract = () => {
    let total = num1 - num2
    document.getElementById("sum-el").textContent 
    document.getElementById("sum-el").textContent = "Sum: " + total
};

const divide = () => {
    let total = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + total
};

const multiply = () => {
    let total = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + total
};

document.getElementById("add").addEventListener("click", add)
document.getElementById("subtract").addEventListener("click", subtract)
document.getElementById("divide").addEventListener("click", divide)
document.getElementById("multiply").addEventListener("click", multiply)