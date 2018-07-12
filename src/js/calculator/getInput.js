import { calc } from "./calc.js";
// вычисления калькулятора
export const getCalc = (selector, e) => {
    if (e.keyCode === 13 || e.which === 13 || ["+", "-", "equal","*","÷"].indexOf(e.target.value)+1) {
        const inp = selector.querySelector('.form-control--calculator').value;
        // тут мы производим простые вычисления
        calc(inp, selector);
        if (e.keyCode === 13 || e.target.value === "equal") {
            selector.querySelector('.form-control--memory').value = selector.querySelector('.form-control--calculator').value;
        }
    };
}

//получаем то что вводим (если жмем кнопки цифровой клаватуры на экране)
export const getInput = (selector, e) => {
    if (e.target.value !== "equal") {
        selector.querySelector(".form-control--memory").value = selector.querySelector(".form-control--memory").value + e.target.value;
        if (!(["%", "log", "√","!","ln"].indexOf(e.target.value)+1)) {
            selector.querySelector(".form-control--calculator").value = selector.querySelector(".form-control--calculator").value + e.target.value;
        }
    }
};
// сброс значения
export const resInput = selector => {
    selector.querySelector(".form-control--calculator").value = " ";
    resMemory(selector);
};

// сброс верхнего инпута (памяти)
const resMemory = selector => {
    selector.querySelector(".form-control--memory").value = " ";
} 
