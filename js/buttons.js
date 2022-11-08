
[...document.getElementsByTagName("button")].forEach(function(item) {
    item.addEventListener('click', function() {
        obj[this.id]();
    })
})

var obj = {
    clerk: function() {
        console.log("clerk");
    },
    board: function() {
        console.log("board");
    },
    governor: function() {
        console.log("gubernatorial");
        var map = document.getElementById("state-map");
        map.innerHTML="";
    
    },
    stateSenate: function() {
        console.log("senate state");
        var map = document.getElementById("state-map");
        map.innerHTML="<div class=\"flourish-embed flourish-map\" data-src=\"visualisation/11750372\"><script src=\"https://public.flourish.studio/resources/embed.js\"></script></div>";
    },
    stateHouse: function() {
        
    },
    attorney: function() {

    },
    secretary: function() {

    },
    referendum: function() {
        
    },
    usSenate: function() {

    },
    usHouse: function() {

    }
}