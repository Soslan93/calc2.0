export const checkJournal = (selector, e) => {
    if (e.target.checked === true) {
        console.log('ddd')
        selector.querySelector('.form-control--journal').style.display = 'block';
        selector.querySelector('.button-clear').style.display = 'block';
    } else {
        selector.querySelector('.form-control--journal').style.display = 'none';
        selector.querySelector('.button-clear').style.display = 'none';
    }
} 
export const clearJournal = (selector, e) => {
    selector.querySelector('.form-control--journal').value = " ";
}