goog.provide('neutron.dashboard.panes.Projects');

goog.require('goog.dom');

neutron.dashboard.panes.Projects = function(parentNode){

    this._htmlNode  = goog.dom.createDom('Div', {'style': 'background-color:#EEE'},
    'ProjectsPane');
  
    parentNode.appendChild(this._htmlNode);
}

