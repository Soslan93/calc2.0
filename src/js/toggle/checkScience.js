export const checkScience = (e) => {
    
    const elem = document.querySelectorAll('.numeric-keypad__item--science');
    if (e.target.checked === true) {
        document.querySelector('.numeric-keypad').style.gridTemplateColumns = 'repeat(5, 1fr)';
        for (let i = 0; i <=elem.length-1; i++){
            elem[i].style.display = 'block';
        }
    } else {
        document.querySelector('.numeric-keypad').style.gridTemplateColumns = 'repeat(4, 1fr)';
        for (let i = 0; i <=elem.length-1; i++){
            elem[i].style.display = 'none';
        }
    }
};
