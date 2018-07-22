export const checkJournal = (selector, e) => {
    if (e.target.checked === true) {
        console.log('ddd')
        selector.querySelector('.form-control--journal').style.display = 'block';
    } else {
        selector.querySelector('.form-control--journal').style.display = 'none';
        selector.querySelector('.form-control--journal').value = " ";
    }
} 