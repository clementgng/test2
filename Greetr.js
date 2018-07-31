(function(global, $){
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  }

  var supportedLanguages = ['en', 'es'];
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  //add object functions'methods onto object's prototype(HERE)
  Greetr.prototype = {
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },

    validate: function(){
      if(supportedLanguages.indexOf(this.language) === -1){
        throw "Invalid language";
      }
    },

    greeting: function(){
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreetings: function(){
      return formalGreetings[this.language] + ', ' + this.firstName;
    },

    greet: function(formal){
      var msg;
      if (formal){
        msg = this.formalGreetings();
      }else{
        msg = this.greeting();
      }
      if(console){
        console.log(msg);
      }
      return this;
    },

    log: function(){
      if(console){
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },

    setLanguage: function(lang){
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal){
      if (!$){
        throw 'jQuery not loaded';
      }
      if (!selector){
        throw 'Missing jQuery selector';
      }
      var msg;
      if (formal){
        msg = this.formalGreetings();
      }else{
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    }

  };

  //add object variables/properties into function constructor(HERE)
  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
    self.validate();
  }
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr
}(window, jQuery));
