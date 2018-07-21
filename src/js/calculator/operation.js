/** pattern singleton (единный экземпляр, который присутствует в приложение)*/
export const operation = {
    sum: (a, b) => {
        let c;
        if (a.includes(".") || b.includes(".")) {
            c = (parseFloat(a) + parseFloat(b)).toFixed(2);
        } else {
            c = parseInt(a) + parseInt(b);
        }
        return c;
    },
    sub: (a, b) => {
        let c;
        if (a.includes(".") || b.includes(".")) {
            c = (parseFloat(a) - parseFloat(b)).toFixed(2);
        } else {
            c = parseInt(a) - parseInt(b);
        }
        return c;
    },
    division: (a, b) => {
        let c;
        if (a.includes(".") || b.includes(".")) {
            c = (parseFloat(a) / parseFloat(b)).toFixed(2);
        } else {
            c = parseInt(a) / parseInt(b);
        }
        return c;
    },
    multiply: (a, b) => {
        let c;
        if (a.includes(".") || b.includes(".")) {
            c = (parseFloat(a) * parseFloat(b)).toFixed(2);
        } else {
            c = parseInt(a) * parseInt(b);
        }
        return c;
    }
}