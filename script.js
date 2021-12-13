function chatZopim(sources) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = sources;
    document.body.appendChild(js);
}

chatZopim("zopim.js");

function banner(sources) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = sources;
    document.body.appendChild(js);
}

banner("bannerkiri.js");

function style(href) {
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = href
    document.head.appendChild(css);
}

style("style.css");