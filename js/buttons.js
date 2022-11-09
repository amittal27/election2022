
[...document.getElementsByTagName("button")].forEach(function(item) {
    item.addEventListener('click', function() {
        obj[this.id]();
    })
})

var obj = {
    governor: function() {
        var map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750879/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    stateSenate: function() {
        map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750372/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    stateHouse: function() {
        map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750592/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    attorney: function() {
        map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750884/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    secretary: function() {
        map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750888/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    referendum: function() {
        map = document.getElementById("state-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750622/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    usSenate: function() {
        map = document.getElementById("federal-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750744/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    },
    usHouse: function() {
        map = document.getElementById("federal-map");
        map.innerHTML = "<iframe src='https://flo.uri.sh/visualisation/11750757/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'></div>";
    }
}