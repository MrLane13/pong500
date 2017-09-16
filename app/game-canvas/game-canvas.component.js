'use strict';

// Register `gameCanvas` component along with it's associated controller and template
angular.
  module('gameCanvas').
    component('gameCanvas', {
      templateUrl: 'game-canvas/game-canvas.template.html',
      controller: function GameCanvasController($http) {
        var self = this;
        // Put any calls to json files here


    }
  });
