const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection',function(ws){
  ws.on('message',function(message){
    console.log("Received: "+message);

    wss.clients.forEach(function(client){
      client.send(message + ' : ' + new Date());
    });
  });

  ws.on('close',function(){
    console.log('connection closed');
  });
});