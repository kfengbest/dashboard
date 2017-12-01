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

neutron.dashboard.DataViewApplication.prototype.init = function(){
    this._createBoard();
}

neutron.dashboard.DataViewApplication.prototype._createBoard = function(){
    this._dataviewBoard = null;
};


function DataViewApplicationStart(){
    console.log("DataViewApplicationStart")    
    window.neutron.dashboard.Application = new neutron.dashboard.DataViewApplication();
    window.neutron.dashboard.Application.init();
}

goog.exportSymbol('DataViewApplicationStart', DataViewApplicationStart);
