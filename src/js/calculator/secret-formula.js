// создать подключение
let socket = new WebSocket("ws://localhost:8081");
export const secretFormula = (selector) => {

    // отправить сообщение из формы publish
    let outgoingMessage = selector.querySelector(".form-control--calculator").value;
    const sendMsg = new Promise((resolve, reject) => {
        socket.send(outgoingMessage);
        socket.onmessage = function (event) {
            var incomingMessage = event.data;
            if (incomingMessage !=="0"){
                resolve(incomingMessage);
            } else if (incomingMessage == "0") {
                reject(incomingMessage);
            }
            
        };
    });



    // обработчик входящих сообщений
    sendMsg
        .then(msg => {
            selector.querySelector(".form-control--calculator").value = msg;
        })
        .catch(error => {
            console.log(`Введите число больше ${error}`);
        })
        .finally(()=>console.log("end"));
}
