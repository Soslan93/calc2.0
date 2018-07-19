import { changeColor } from "./theming/color";
import { getInput, resInput, getCalc, getScienceCalc } from "./get-input";
import { checkScience } from "./toggle/check-science";
import { percent, scienceCalc } from "./calc";
/** фабрика предназначена для создания объектов*/
class Calculator {
    constructor(clName) {
        this.clName = clName;
    }
    /**фабричный метод */
    init() {
        let calc = document.querySelector(this.clName);
        /** изменение цвета калькулятора*/
        calc.querySelector('.change-color').addEventListener("click", changeColor.bind(this, calc));
        /** вычисляем результат (можно вычислить результат по нажатию кнопки Enter или нажать на кнопку "=", 
        * а также промежуточные результаты)
        */
        const oper = calc.querySelectorAll('.numeric-keypad__item--operation');
        for (let i = 0; i <= oper.length - 1; i++) {
            oper[i].addEventListener('click', getCalc.bind(this, calc));
        }
        /** получаем то что ввели на экране*/
        calc.querySelector(".numeric-keypad").addEventListener('click', getInput.bind(this, calc));
        /** сброс значения*/
        calc.querySelector(".numeric-keypad__item--reset").addEventListener('click', resInput.bind(this, calc));
        /** проверка переключателя обычный/инженерный*/
        calc.querySelector(".myCheck").addEventListener('click', checkScience.bind(this, calc));
        /** проценты */
        calc.querySelector('.numeric-keypad__item--perc').addEventListener('click', percent.bind(this, calc));
        /** инженерный калькулятор*/
        const scoper = calc.querySelectorAll('.numeric-keypad__item--science');
        for (let i = 0; i <= scoper.length - 1; i++) {
            scoper[i].addEventListener('click', scienceCalc.bind(this, calc));
        }
    }
}
export default Calculator;