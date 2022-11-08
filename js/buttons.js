
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
        
    },
    stateSenate: function() {

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