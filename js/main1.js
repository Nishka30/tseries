$(document).ready(function(){   
    window.setTimeout('fadeout();', 1000);
    
});

function fadeout(){
    $('#loader').delay(1000).fadeOut('slow', function() {
       $('.notLoaded').removeClass('notLoaded');
    });
}
