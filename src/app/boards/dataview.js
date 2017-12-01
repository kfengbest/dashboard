goog.provide('neutron.dashboard.boards.DataView');

goog.require('goog.dom');

goog.require('neutron.dashboard.panes.Projects');

neutron.dashboard.boards.DataView = function(parentHtml){

  this._htmlNode  = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
  'dataviewBoard');

  parentHtml.appendChild(this._htmlNode);

  // create children
  this._projectsPane = new neutron.dashboard.panes.Projects(this._htmlNode);
  
};