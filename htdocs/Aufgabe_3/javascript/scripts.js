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
    console.log("Browser is getting detected");
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

function setCookieCurrentDay(){
    console.log("current day cookie is getting set");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    document.cookie = 'currentday='+dd+'; expires=Thu, 24 Jan 2019 12:00:00 UTC';
    document.cookie = 'currentmonth='+mm+'; expires=Thu, 24 Jan 2019 12:00:00 UTC';
    document.cookie = 'currentyear='+yyyy+'; expires=Thu, 24 Jan 2019 12:00:00 UTC';
}
function checkIfAlreadyVisited(returnvalue){
    var x = document.cookie.length;
    if (x == 0){
        if (returnvalue == 'bool'){
            return false;
        }else{
            return x;
        }
    }else{
        if (returnvalue == 'bool'){
            return true;
        }else{
            return x;
        }
    }
}
function setLastDay(name){
    //dayValue initialized as null
    var dayValue = null;
    //splits all the cookies into a string array
    var ca = document.cookie.split(';');
    //runs through the string array
    for(var i=0;i < ca.length;i++) {
        //c is the current string, that will be looked at
        var c = ca[i];
        //aslong as there is a blankspace at the beginning of the string, cut the blankspace
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        //looks for the name in c
        if (c.indexOf(name) == 0){
            //dayValue set to found value
            dayValue = c.substring(name.length,c.length);
        }
    }
    if (dayValue != null){
        var cookieText = '';
        switch(name) {
            case "currentday=":
                cookieText = 'lastday=';
                break;
            case "currentmonth=":
                cookieText = 'lastmonth=';
                break;
            case "currentyear=":
                cookieText = 'lastyear=';
                break;
            default:
        }
        document.cookie = cookieText + dayValue +'; expires=Thu, 24 Jan 2019 12:00:00 UTC';
    }
}
function setCookie(){
    if(checkIfAlreadyVisited('bool')){
        setLastDay("currentday=");
        setLastDay("currentmonth=");
        setLastDay("currentyear=");
    }
    setCookieCurrentDay();
}
function readCookie(){
    var x = document.cookie;
    return x;
}
function showCookie(){
    alert(readCookie());
}

function getLastVisited(name){
    //dayValue initialized as null
    var dayValue = null;
    //splits all the cookies into a string array
    var ca = document.cookie.split(';');
    //runs through the string array
    for(var i=0;i < ca.length;i++) {
        //c is the current string, that will be looked at
        var c = ca[i];
        //aslong as there is a blankspace at the beginning of the string, cut the blankspace
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        //looks for the name in c
        if (c.indexOf(name) == 0){
            //dayValue set to found value
            dayValue = c.substring(name.length,c.length);
        }
    }
    if (dayValue != null){
        while (dayValue.charAt(0)=='=') dayValue = dayValue.substring(1,dayValue.length);
        return dayValue;
    }
}

function readLastVisited() {
    var stringValue = 'Last visited: ';
    if (checkIfAlreadyVisited('int') > 50){
        stringValue += getLastVisited('lastday')+'-'+getLastVisited('lastmonth')+'-'+getLastVisited('lastyear');
    }else {
        stringValue = 'Not Yet visited.'
    }
    return stringValue;
}

a = 10;
console.log(a);

function disp() {
    var a = 20;
    document.write("a inside the function: " + a)
}

function drawCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
}

function resetForms(oForm){
    //creates reference to the form, in an array
    var frm_elements = oForm.elements;
    //loops through the array
    for(i=0; i<frm_elements.length; i++)
    {
        //implicitly sets the type of current input object
        field_type = frm_elements[i].type.toLowerCase();
        //switch, depending on what input we are looking at
        switch (field_type)
        {
            case "text":
                //resets name
                frm_elements[i].value = "John";
                break;
            case "password":
                //resets password
                frm_elements[i].value = "";
                break;
            case "radio":
                switch (frm_elements[i].value) {
                    case "male":
                        frm_elements[i].checked = true;
                        break;
                    case "female":
                    case "other":
                        frm_elements[i].checked = false;
                        break;
                    default:
                        break;
                }
                break;
            case "email":
                //resets email
                frm_elements[i].value = "test@test.test";
                break;
            case "date":
                //resets email
                frm_elements[i].value = "test@test.test";
                break;
            default:
                break;
        }
    }
}

setCookie();
disp();
document.write("<BR>");
document.write("a outside the function: " + a);
document.write("<BR>");
document.write(readLastVisited());

setInterval(function(){ drawCanvas(); }, 3000);