import 'bootstrap';
import "../scss/custom.scss";
import { changeColor } from "./theming/color.js";
import { getInput, resInput, getCalc, getScienceCalc } from "./calculator/getInput.js";
import calcEvent from "./calculator/eventCalc";
// создаем класс для инициализации наших калькуляторов
class InitCalculate {
    constructor(clName){
        this.clName = clName;
    }
    init(){
        let calc = document.querySelector(this.clName);
        calcEvent(calc);
    }

}
const calculate1 = new InitCalculate('.calculator');
calculate1.init();

const calculate2 = new InitCalculate('.calculator2');
calculate2.init();