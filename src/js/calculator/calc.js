import { operation } from "./operation";
import { resInput } from "./get-input";
/** функция для простых вычислений*/
export const calc = (inp, selector) => {
    let op, a, res;
    a = inp.match(/[*^+÷y-]/);
    if (a !== null) {
        op = inp.split(a[0]);
        if (op[0] === "") {
            op[0] = "0";
        }
        let b = op[1].match(/[*^+÷y-]/);
        if (b !== null && b.index > 0 && !b.input.includes('(') && !b.input.includes(')')) {
            let un = op[1].split(b[0]);
            op[0] = `-${un[0]}`;
            op[1] = `${un[1]}`;
            a[0] = b[0];
        } else if (op[1].includes('(') && op.length !== 3) {
            op[1] = op[1].slice(op[1].indexOf("(") + 1, op[1].indexOf(")"));
        } else if (op[1].includes('(') && op.length === 3) {
            op[1] = `-${op[2].slice(0, -1)}`;
            op.pop();
        }
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
            case "y":
                res = Math.pow(op[0], 1 / op[1]);
                break;
        }
        if (`${res}`.includes('.00')) {
            res = parseInt(res);
        };
        selector.querySelector(".form-control--calculator").value = res;
    }
}
/** функция для процентов*/
export const percent = (selector) => {
    let op, a;
    const inp = selector.querySelector('.form-control--calculator').value;
    a = inp.match(/[*+÷-]/);
    if (a !== null) {
        op = inp.split(a[0]);
        op[1] = op[0] * op[1] / 100;
        selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
    } else {
        op = inp / 100;
        selector.querySelector('.form-control--calculator').value = op;
    }
}
/** функция для научных вычислений*/
export const scienceCalc = (selector, e) => {
    let op, a, b = true;
    const inp = selector.querySelector('.form-control--calculator').value;
    a = inp.match(/[*+÷-]/);
    switch (b) {
        case e.target.matches('.negative'):
            if (a !== null) {
                op = inp.split(a[0]);
                if (op[1] === "(" && op[0]!=="") {
                    console.log(op[1],op[2])
                    op[1] = `${op[2].slice(0 , op[2].indexOf(")"))}`;
                } else if (op[0]!=="") {
                    op[1] = `(-${op[1]})`;
                    
                    console.log(op);
                } 
                if (op[0]!=="") {
                    selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
                } else {
                    selector.querySelector('.form-control--calculator').value = `${op[1]}`;
                }
                
            } else {
                op = - inp;
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.log'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log10(op[1]);
                selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log10(inp);
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.ln'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log(op[1]);
                selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log(inp);
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.ln'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.log(op[1]);
                selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.log(inp);
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.square'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = Math.sqrt(op[1]);
                selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = Math.sqrt(inp);;
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
        case e.target.matches('.factor'):
            if (a !== null) {
                op = inp.split(a[0]);
                op[1] = factorial(op[1]);
                selector.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
            } else {
                op = factorial(inp);;
                selector.querySelector('.form-control--calculator').value = op;
            }
            break;
    }

}

const factorial = (operand) => {
    /** If the number is less than 0, reject it.*/
    if (operand < 0) {
        return -1;
    }
    /** If the number is 0, its factorial is 1.*/
    else if (operand == 0) {
        return 1;
    }
    /** Otherwise, call this recursive procedure again.*/
    else {
        return (operand * factorial(operand - 1));
    }
}
