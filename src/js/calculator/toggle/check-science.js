/** проверка режима инженерного калькулятора*/
export const checkScience = (selector, e) => {
    
    const elem = selector.querySelectorAll('.numeric-keypad__item--science');
    if (e.target.checked === true) {
        selector.querySelector('.numeric-keypad').style.gridTemplateColumns = 'repeat(5, 1fr)';
        for (let i = 0; i <=elem.length-1; i++){
            elem[i].style.display = 'block';
        }
    } else {
        selector.querySelector('.numeric-keypad').style.gridTemplateColumns = 'repeat(4, 1fr)';
        for (let i = 0; i <=elem.length-1; i++){
            elem[i].style.display = 'none';
        }
    }
};
