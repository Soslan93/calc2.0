import 'bootstrap';
import "../scss/custom.scss";
import Calculator from "./calculator/init";

/** использование фабрики*/
const calculate1 = new Calculator('.calculator');
calculate1.init();
/** использование фабрики*/
const calculate2 = new Calculator('.calculator2');
calculate2.init();