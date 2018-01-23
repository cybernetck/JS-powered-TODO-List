/*
dom.JS

DOM manipulation

*/

var $ = function(sel) {

    var elem = document.querySelectorAll(sel);

    var text = function (userInput) {
        // pass in test from user, and update text
        elem.textContent = userInput;

         }

    var text2 = function (str) {

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

    //toggleClass - Jan 23rd

    //html

    var html= function (htmlUpdate) {

        //elem.innerHTML = "<ul>";

        for (var i = 0; i < elem.length; ++i) {
            elem.innerHTML = htmlUpdate;
        }
       // elem.innerHTML += "<ul>";
    }

    var toggleClass = function (className) 
    {
        console.log("toggleClass called.");
    
        for (var i = 0; i < elem.length; i++) 
        {
            if (elem[i].className.includes(className))  
                {
                    removeClass(className);
                }
            else 
                {
                    addClass(className);

                }
        }
    }

    publicAPI = {
           element: elem,
              text: text,
             text2: text2,
          addClass: addClass,
       removeClass: removeClass,
                on: on,
              html:html,
    toggleClass:toggleClass
    }

    return publicAPI;

}
