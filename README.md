# greetr-js-lib
## My own JavaScript Library

I have written this ***reusable*** **JavaScript Library** which creates a 'Greetr' object that generates formal and informal greetings when given a firstname, lastname and optional language. It supports 3 languages: *English (default), Hindi and Punjabi.*

It is executed as an Immediately-invoked Function Expression **(IIFE)** by passing the *global/window* and *jQuery* objects as parameters. It creates the 'Greetr' object and attaches it to the global object. It also provides a shorthand 'G$' *(just like jQuery)* for easier typing by creating an alias.

It follows the architecture/pattern used by jQuery library and also uses jQuery to access DOM elements. All of its methods are *chainable* as they return the object (Greetr) itself. 
