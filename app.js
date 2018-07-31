var g = G$('John', 'Doe');
g.setLanguage('es').greet(true).log();

$('#test').click(function(){
  var loginGreeter = G$('John', 'Doe');
  $('#logindiv').hide();
  loginGreeter.setLanguage($('#lang').val()).HTMLGreeting('#greeting2', true).log();
})
