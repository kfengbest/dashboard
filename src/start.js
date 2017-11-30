goog.provide('dashboard.start');

goog.require('goog.dom');

dashboard.start = function(){
    var newDiv = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    'Hello world!');
    goog.dom.appendChild(document.body, newDiv);
};

goog.exportSymbol('dashboard.start', dashboard.start);
