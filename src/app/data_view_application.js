goog.provide('neutron.dashboard.DataViewApplication');

goog.require('goog.dom');
goog.require('goog.events.EventTarget');


neutron.dashboard.DataViewApplication = function(){
    goog.base(this);
}

goog.inherits(neutron.dashboard.DataViewApplication, goog.events.EventTarget);


function DataViewApplicationStart(){

    window.neutron.dashboard.Application.instance = new neutron.dashboard.DataViewApplication();
    
}

goog.exportSymbol('DataViewApplicationStart', DataViewApplicationStart);
