goog.require('goog.dom');

function sayHi(){
    var newHeader = goog.dom.createDom('hi', {'style':'background-color:#EEE'}, 'hello closure');
    goog.dom.appendChild(document.body, newHeader);
}

