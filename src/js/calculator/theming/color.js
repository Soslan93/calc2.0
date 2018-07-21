export const changeColor = (selector, e) => {
    const color = window.getComputedStyle(e.target).background;// получаем значение цвета нажатого блока
    selector.style.background = color;// присваеваем значение цвета калькулятору
};

