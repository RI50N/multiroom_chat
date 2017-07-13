module.exports = function(aplication){
  aplication.get('/', function(req, res) {
    res.send('teste');
  });
};
