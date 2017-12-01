goog.provide('neutron.dashboard.boards.DataView');

goog.require('goog.dom');

neutron.dashboard.boards.DataView = function(parentHtml){

  this._htmlNode  = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
  'dataviewBoard');

  parentHtml.appendChild(this._htmlNode);

};