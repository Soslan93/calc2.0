/** получаем значение цвета нажатого блока и присваеваем значение цвета калькулятору */
export const changeColor = (selector, e) => {
    const color = window.getComputedStyle(e.target).background;
    selector.style.background = color;
};

