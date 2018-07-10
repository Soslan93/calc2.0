import 'bootstrap';
import "../scss/custom.scss";
import { changeColor } from "./theming/color.js";
import { getInput, resInput, getCalc } from "./calculator/getInput.js";
import { checkScience } from "./toggle/checkScience.js";
import { percent } from "./calculator/calc.js";
const init = (function() {
    const setEvList = () => {
        document.querySelector(".change-color").addEventListener("click", changeColor);
        // вычисляем результат (можно вычислить результат по нажатию кнопки Enter или нажать на кнопку "=")
        document.addEventListener('keypress', getCalc);
        document.querySelector('.numeric-keypad__item--equal').addEventListener('click', getCalc);
        document.querySelector('.numeric-keypad__item--multiply').addEventListener('click', getCalc);
        document.querySelector('.numeric-keypad__item--minus').addEventListener('click', getCalc);
        document.querySelector('.numeric-keypad__item--division').addEventListener('click', getCalc);
        document.querySelector('.numeric-keypad__item--plus').addEventListener('click', getCalc);
        
        // получаем то что ввели на экране
        document.querySelector(".numeric-keypad").addEventListener('click', getInput);
        // сброс значения
        document.querySelector(".numeric-keypad__item--reset").addEventListener('click', resInput);
        // проверка переключателя обычный/инженерный
        document.querySelector(".myCheck").addEventListener('click', checkScience);
        // проценты
        document.querySelector('.numeric-keypad__item--perc').addEventListener('click', percent);
    };
    return {
        listener: function () {
            setEvList();
        }
    }
})();

init.listener();
