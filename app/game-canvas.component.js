'use strict';

// Register `gameCanvas` component, along with its associated controller and template
angular.
  module('pong500').
    component('gameCanvas', {
      template:
        '<p>' +
          'Hello there, world!' +
        '</p>'
      controller: function GameCanvasController() {
        this.blocks = [
          {
            height: '5',
            width: '2',
          }
        ];
      }
    });
