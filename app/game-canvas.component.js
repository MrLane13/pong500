'use strict';

// Register `gameCanvas` component, along with its associated controller and template
angular.
  module('pong500').
    component('gameCanvas', {
      template:

      controller: function GameCanvasController() {
        var canvas = self.getElementById('gameCanvasElement');
        var ctx = canvas.getContext("2d");
        var refreshCanvasInterval = 10;
      }
    });
