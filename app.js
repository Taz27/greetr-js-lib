//gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Kiara', 'Mand');

//use our chainable methods
g.greet().setLang('hn').greet().log().setLang('pb').greet(true).log();

//use our object  on the click of the login button
$("#login").on("click", function() {
    //create new 'Greetr' object (let's pretend we know the name from login)
    var loginGrtr = G$('Taran', 'Mand');
    
    //hide the login on screen
    $('#logindiv').hide();
    
    //fire off an HTML greeting, passing the '#greeting' as the selector
    //and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLgreeting('#greeting', true).log();
});




