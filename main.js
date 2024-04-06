const firstNumber = document.getElementById("first-equ");
const secondNumber = document.getElementById("second-equ");
const thirdNumber = document.getElementById("third-equ");

const firstResult = document.getElementById("first-result");
const secondResult = document.getElementById("second-result");

function solve() {
    // test to check for the values inputed: alert(`a is ${firstNumber.value}, b is ${secondNumber.value}, and c is ${thirdNumber.value}`);

    // test to display answer: firstResult.textContent = firstNumber.value;

    let firstPart = -secondNumber.value;
    
    let bSquared = secondNumber.value * secondNumber.value;
    
    let fourAC = 4 * firstNumber.value * thirdNumber.value;
    
    let secondPart = Math.pow((bSquared - fourAC) ,1/2);
    
    let thirdPart = 2 * firstNumber.value;
    
    let firstAnswer = (firstPart + secondPart) / thirdPart;
    let secondAnswer = (firstPart - secondPart) / thirdPart;

    firstResult.textContent = firstAnswer;
    secondResult.textContent = secondAnswer;
}