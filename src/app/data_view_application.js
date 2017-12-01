goog.provide('neutron.dashboard.DataViewApplication');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');


neutron.dashboard.DataViewApplication = function(){
    console.log("DataViewApplication")
    goog.base(this);
}

goog.inherits(neutron.dashboard.DataViewApplication, goog.events.EventTarget);

function DataViewApplicationStart(){
    console.log("DataViewApplicationStart")    
    window.neutron.dashboard.Application = new neutron.dashboard.DataViewApplication();
}

goog.exportSymbol('DataViewApplicationStart', DataViewApplicationStart);
