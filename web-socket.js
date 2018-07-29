var WebSocketServer = new require('ws'),
    static = require('node-static');

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
    port: 8081
});
webSocketServer.on('connection', function (ws) {

    ws.on('message', function (message) {
        console.log('получено число ' + message);
        ws.send(message * Math.PI);
    });

    ws.on('close', function () {
        console.log('соединение закрыто ');
    });

});
console.log('ws running on port: 8081');