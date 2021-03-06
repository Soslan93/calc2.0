import { operation } from "./operation.js";
import { resInput } from "./getInput.js";

export const calc = (inp) => {
    let op, a, res;
    a = inp.match(/[*^+÷-]/);
    if (a !== null) {
        op = inp.split(a[0]);
        switch (a[0]) {
            case "+":
                res = operation.sum(op[0], op[1]);
                break;
            case "-":
                res = operation.sub(op[0], op[1]);
                break;
            case "÷":
                res = operation.division(op[0], op[1]);
                break;
            case "*":
                res = operation.multiply(op[0], op[1]);
                break;
            case "^":
                res = Math.pow(op[0], op[1]);
                break;
        }
        document.querySelector(".form-control--calculator").value = res;
    }
}

export const percent = () => {
    let op, a;
    const inp = document.querySelector('.form-control--calculator').value;
    a = inp.match(/[*+÷-]/);
    if (a !== null) {
        op = inp.split(a[0]);
        op[1] = op[0] * op[1] / 100;
        document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
    } else {
        op = inp / 100;
        document.querySelector('.form-control--calculator').value = op;
    }
}
export const scienceCalc = (e) => {
    let op, a, b = true;
    const inp = document.querySelector('.form-control--calculator').value;
    a = inp.match(/[*+÷-]/);
    switch (b) {
        case e.target.matches('.log'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log10(op[1]);
                document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log10(inp);
                document.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.ln'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log(op[1]);
                document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log(inp);
                document.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.ln'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log(op[1]);
                document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log(inp);
                document.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.square'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.sqrt(op[1]);
                document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.sqrt(inp);;
                document.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.factor'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = factorial(op[1]);
                document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = factorial(inp);;
                document.querySelector('.form-control--calculator').value = op;
            }
            break;
    }

}

const factorial = (operand) => {
    // If the number is less than 0, reject it.
    if (operand < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (operand == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (operand * factorial(operand - 1));
    }
}