a = 10;

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

function detectBrowser() {
    var detectedBrowser;
    if (isOpera){
        detectedBrowser = "Opera";
    } else if (isFirefox){
        detectedBrowser = "Firefox";
    } else if (isSafari){
        detectedBrowser = "Safari";
    } else if (isIE){
        detectedBrowser = "IE";
    } else if (isEdge){
        detectedBrowser = "Edge";
    } else if (isChrome){
        detectedBrowser = "Chrome";
    } else if (isBlink){
        detectedBrowser = "Blink";
    }
    return detectedBrowser;
}
function createDivBrowser(){
    var element = document.createElement("div");
    var para = document.createTextNode(detectBrowser());
    element.appendChild(para);
    document.getElementsByTagName("body")[0].appendChild(element);
}

function disp() {
    var a = 20;
    document.write("a inside the function: " + a)
}
function DisplayMessage() {
    alert("Hello");
    alert("How are you?");
}
disp();
document.write("<BR>");
document.write("a outside the function: " + a);