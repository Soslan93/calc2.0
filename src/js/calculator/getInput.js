import { calc } from "./calc.js";
// вычисления калькулятора
export const getCalc = (e) => {
    if (e.keyCode === 13 || e.which === 13 || ["+", "-", "equal","*","÷"].indexOf(e.target.value)+1) {
        const inp = document.querySelector('.form-control--calculator').value;
        calc(inp);
        if (e.keyCode === 13 || e.target.value === "equal") {
            document.querySelector('.form-control--memory').value = document.querySelector('.form-control--calculator').value;
        }
    };
}
//получаем то что вводим (если жмем кнопки цифровой клаватуры на экране)
export const getInput = (e) => {
    if (e.target.value !== "equal") {
        document.querySelector(".form-control--memory").value = document.querySelector(".form-control--memory").value + e.target.value;
        if (e.target.value !== "%") {
            document.querySelector(".form-control--calculator").value = document.querySelector(".form-control--calculator").value + e.target.value;
        }
    }
};
// сброс значения
export const resInput = () => {
    document.querySelector(".form-control--calculator").value = " ";
    resMemory();
};

// сброс верхнего инпута (памяти)
const resMemory = () => {
    document.querySelector(".form-control--memory").value = " ";
} 

