// создать подключение
let socket = new WebSocket("ws://localhost:8081");
export const secretFormula = (selector) => {
    
    // отправить сообщение из формы publish
    let outgoingMessage = selector.querySelector(".form-control--calculator").value;
    socket.send(outgoingMessage);


    // обработчик входящих сообщений
    socket.onmessage = function (event) {
        var incomingMessage = event.data;
        showMessage(incomingMessage);
    };

    // показать сообщение в div#subscribe
    function showMessage(message) {
        selector.querySelector(".form-control--calculator").value = message;
    }
}
