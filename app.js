

let activeNum= []
let transferString = ""
let operationVariable = ""
let firstNum = ""
let secondNum = ""

//when the odin project swings to objects, or another way to make this succinct come back and fix these

const oneEl = document.getElementById("one-el")
const twoEl = document.getElementById("two-el")
const threeEl = document.getElementById("three-el")
const fourEl = document.getElementById("four-el")
const fiveEl = document.getElementById("five-el")
const sixEl = document.getElementById("six-el")
const sevenEl = document.getElementById("seven-el")
const eightEl = document.getElementById("eight-el")
const nineEl = document.getElementById("nine-el")
const zeroEl = document.getElementById("zero-el")
const addEl = document.getElementById("add-el")
const subEl = document.getElementById("sub-el")
const multEl = document.getElementById("mult-el")
const divEl = document.getElementById("div-el")
const decEl = document.getElementById("dec-el")
const equalEl = document.getElementById("equal-el")
const clearEl = document.getElementById("clear-el")
const deleteEl = document.getElementById("del-el")
const screenEl = document.getElementById("screen-el")


oneEl.addEventListener("click", () => appendToActive(1))
twoEl.addEventListener("click", () => appendToActive(2))
threeEl.addEventListener("click", () => appendToActive(3))
fourEl.addEventListener("click", () => appendToActive(4))
fiveEl.addEventListener("click", () => appendToActive(5))
sixEl.addEventListener("click", () => appendToActive(6))
sevenEl.addEventListener("click", () => appendToActive(7))
eightEl.addEventListener("click", () => appendToActive(8))
nineEl.addEventListener("click", () => appendToActive(9))
zeroEl.addEventListener("click", () => appendToActive(0))
addEl.addEventListener("click", () => setOperation("+") )
subEl.addEventListener("click", () => setOperation("-") )
multEl.addEventListener("click", () => setOperation("*") )
divEl.addEventListener("click", () => setOperation("/") )
decEl.addEventListener("click", () => appendToActive("."))
equalEl.addEventListener("click", () => runCalculationSequence())
clearEl.addEventListener("click", () => clear())
// deleteEl

function appendToActive(input) {
    if (activeNum.length < 11){
        activeNum.push(input)
        activeNum.forEach(element => transferString += element)
        screenEl.textContent = transferString
        transferString = ""
        // console.log(activeNum, transferString)
    }
}

function setOperation(operator) {
    if (!operationVariable){
        operationVariable = operator
        updateScreen()
    }
    else {
    runCalculationSequence()
    operationVariable = operator
    }
}


// technically could use type coercion here instead of number(), feels dirty
<<<<<<< HEAD
function setOperation(operator) {
    if (!secondNum){
        operationVariable = operator
        firstNum = Number(activeNum.join(""))
        screenEl.textContent = operator
        transferString = ""
        activeNum = []
        // console.log(firstNum, "firstnum")
    }
=======
function updateScreen() {
    if (!firstNum) firstNum = Number(activeNum.join(""));
>>>>>>> rework

    screenEl.textContent = `${firstNum} ${operationVariable}`
    transferString = ""
    activeNum = []
}

function runCalculationSequence() {
    secondNum = Number(activeNum.join(""))
<<<<<<< HEAD
    let total = operate(operationVariable, firstNum, secondNum)
    console.log(total)
    screenEl.textContent = total
    firstNum = total
    secondNum = ""
    activeNum = []
    operationVariable=""



    // console.log("online")

=======
    if (firstNum && secondNum) {
        let total = operate(operationVariable, firstNum, secondNum)
        if (total % 1 != 0) total = total.toFixed(2);
        screenEl.textContent = total
        firstNum = total
        secondNum = ""
        activeNum = []
        operationVariable = ""
    }
>>>>>>> rework
}

function clear() {
    activeNum= []
    transferString = ""
    operationVariable = ""
    firstNum = ""
    secondNum = ""
    screenEl.textContent = 0
}

let operation = {
    add: function(num1, num2) {
        return (num1 + num2)
    },
    sub: function(num1, num2) {
        return (num1 - num2)
    },
    mult: function(num1, num2) {
        return (num1 * num2)
    },
    div: function(num1, num2) {
        if (num2) {
        return (num1 / num2)
        }
        else {
            alert("really?")
            return
        }
    }

}

function operate(operator, num1, num2) {
    if (operator === "+") return operation.add(num1, num2);
    else if (operator === "-") return operation.sub(num1, num2);
    else if (operator === "*") return operation.mult(num1, num2);
    else if (operator === "/") return operation.div(num1, num2);
}