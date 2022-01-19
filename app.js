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
    if (operator == "+") add(num1, num2);
    else if (operator == "-") sub(num1, num2);
    else if (operator == "*") mult(num1, num2);
    else if (operator == "/") div(num1, num2);
}