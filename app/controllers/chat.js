module.exports.iniciaChat = function(application, req, res) {
  var dadosForm = req.body;

  req.assert('nick', 'Nome ou apelido é obrigatório').notEmpty();
  req.assert('nick', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

  req.getValidationResult().then(function(result) {
    var errors = result;
    if (errors.isEmpty()) {
      res.render("chat");
    } else {
      res.render("index", {
        validacao: errors.array()
      });
    }
    return;
  });
};
