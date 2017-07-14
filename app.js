var app = require ('./config/server');

var server = app.listen(3000, function(){
  console.log('servidor ON');
})

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('Usuario conectou');
  socket.on('disconnect', function () {
    console.log('Usuário desconectou');
  });
});
