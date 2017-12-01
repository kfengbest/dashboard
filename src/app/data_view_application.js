goog.provide('neutron.dashboard.DataViewApplication');

goog.require('goog.dom');
goog.require('goog.events.EventTarget');


neutron.dashboard.DataViewApplication = function(){
    console.log("DataViewApplication")
}


function DataViewApplicationStart(){
    console.log("DataViewApplicationStart")    
}

goog.exportSymbol('neutron.dashboard.DataViewApplication', neutron.dashboard.DataViewApplication);
