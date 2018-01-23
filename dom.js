/*
dom.JS

DOM manipulation

*/

var $ = function(sel) {

    var elem = document.querySelectorAll(sel);

    var text = function (str) {

           for (var i = 0; i < elem.length; ++i) {
            elem[i].innerText = str;

            }
    
    }

    var addClass = function (className) {
        // add class to every element
        console.log("addClass called");

        //var allElem = document.querySelectorAll("*");    

        for (var i = 0; i < elem.length; ++i) {

            elem[i].classList.add(className);

        }
     
    }

    var removeClass = function (className) {
        //remove class from element
        console.log("Remove class called");

        for(var i = 0; i < elem.length; ++i) {

            elem[i].classList.remove(className);

        }

    }

    var on = function(action , cb) {
        //
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

    //html

    var html = function (htmlUpdate) {
        for (var i = 0; i < elem.length; ++i) {
            elem[i].innerHTML = htmlUpdate;
        }
    }

    var appendHtml = function (htmlUpdate) {
        for (var i = 0; i < elem.length; ++i) {
            elem[i].innerHTML += htmlUpdate;
        }
    }
    
    var toggleClass = function (className)  {

        console.log("toggleClass called.");
        console.dir(elem);
        for (var i = 0; i < elem.length; i++)  {
            if (elem[i].className.includes(className))  
                {
                    elem[i].classList.remove(className);
                }
            else 
                {
                    elem[i].classList.add(className);
                }
                                                }
    }

    publicAPI = {
           element: elem,
              text: text,
          addClass: addClass,
       removeClass: removeClass,
                on: on,
              html:html,
        appendHtml:appendHtml,
    toggleClass:toggleClass
    }

    return publicAPI;

}
