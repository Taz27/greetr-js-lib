(function(global, $) {
    
    //'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    //(Only accessible by CLOSURE) hidden within the scope of IIFE and never directly accessible
    var supportedLangs = ['en', 'hn', 'pb'];
    
    //informal greetings
    var greetings = {
      en: 'Hello',
      hn: 'Kaise Ho',
      pb: 'Kiddaan Bai'    
    };
    
    //formal greetings
    var formalGreetings = {
      en: 'Greetings',
      hn: 'Namaste',
      pb: 'Kiven Ho'    
    };
    
    //logger messages
    var logMessages = {
      en: 'English Logged in',
      hn: 'Hindi Greeting Logged in',
      pb: 'Punjabi Greeting Logged in'    
    };
    
    // prototype holds methods (to save memory space)
    Greetr.prototype = {
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName(); 
        },
        
        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;
            //if undefined or null, it will be coerced to false.
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            //Log message to console.
            if (console) {
                console.log(msg);
            }
            
            //'this' refers to the calling object at execution time.
            //makes this method chainable.
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            return this; //make it chainable.
        },
        
        setLang: function(lang) {
            // set the language
            this.language = lang;
            // Validate
            this.validate();
            //make it chainable
            return this;
        },
        
        HTMLgreeting: function(selector, formal) {
            if (!$) { //if jQuery is not available, throw error
                throw 'Jquery Not Loaded';
            } 
            if (!selector) { //if selector is missing, throw error
                throw 'Missing jQuery Selector';
            }
            var msg; // determine the message
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            //make chainable (returning itself)
            return this;   
        }
    };
    
    //Constructor function
    //the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        this.validate();
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;
    
    // attach our Greetr to the global object, and provide a shorthand '$G' for easier typing.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));