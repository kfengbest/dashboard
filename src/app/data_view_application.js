goog.provide('neutron.dashboard.DataViewApplication');

goog.require('goog.dom');
goog.require('goog.events.EventTarget');


neutron.dashboard.DataViewApplication = function(){
    goog.base(this);
}

goog.inherits(neutron.dashboard.DataViewApplication, goog.events.EventTarget);


function DataViewApplicationStart(){
    console.log("DataViewApplicationStart")    
}

goog.exportSymbol('DataViewApplicationStart', DataViewApplicationStart);
