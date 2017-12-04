goog.provide('neutron.dashboard.panes.People');

goog.require('goog.dom');

neutron.dashboard.panes.People = function(parentNode){

    this._htmlNode  = goog.dom.createDom('Div', {'style': 'background-color:#EEE'},
    'PeoplePane');
  
    parentNode.appendChild(this._htmlNode);
}

