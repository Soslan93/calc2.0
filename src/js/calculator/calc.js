import { operation } from "./operation.js";
import { resInput } from "./getInput.js";

export const calc = (inp) => {
    let op, a, res;
    a = inp.match(/[*+÷-]/);
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
        op[1] = op[0]*op[1]/100;
        document.querySelector('.form-control--calculator').value = `${op[0]}${a[0]}${op[1]}`;
    } else {
        op = inp/100;
        document.querySelector('.form-control--calculator').value = op;
    }
}

