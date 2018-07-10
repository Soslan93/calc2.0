export const changeColor = (e) => {
    const colorClass = e.target.className;
    const color = window.getComputedStyle(e.target).background;
    document.querySelector('.calculator').style.background = color;
    document.querySelector('.calculator--science').style.background = color;
};

