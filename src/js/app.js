import 'bootstrap';
import "../scss/custom.scss";
import { changeColor } from "./theming/color.js";
import { getInput, resInput, getCalc, getScienceCalc } from "./calculator/getInput.js";
import { checkScience } from "./toggle/checkScience.js";
import { percent, scienceCalc } from "./calculator/calc.js";

const init = (function () {
    const setEvList = () => {
        document.querySelector(".change-color").addEventListener("click", changeColor);
        // вычисляем результат (можно вычислить результат по нажатию кнопки Enter или нажать на кнопку "=", 
        //а также промежуточные результаты)
        const oper = document.querySelectorAll('.numeric-keypad__item--operation');
        for (let i = 0; i <= oper.length - 1; i++) {
            oper[i].addEventListener('click', getCalc);
        }
        // получаем то что ввели на экране
        document.querySelector(".numeric-keypad").addEventListener('click', getInput);
        // сброс значения
        document.querySelector(".numeric-keypad__item--reset").addEventListener('click', resInput);
        // проверка переключателя обычный/инженерный
        document.querySelector(".myCheck").addEventListener('click', checkScience);
        // проценты
        document.querySelector('.numeric-keypad__item--perc').addEventListener('click', percent);
        // инженерный калькулятор
        const scoper = document.querySelectorAll('.numeric-keypad__item--science');
        for (let i = 0; i <= scoper.length - 1; i++) {
            scoper[i].addEventListener('click', scienceCalc);
        }
    };
    return {
        listener: function () {
            setEvList();
        }
    }
})();

init.listener();
