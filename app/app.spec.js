'use strict';

describe('GameCanvasController', function() {
  it('should create a `canvas` model with 0 blocks', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('GameCanvasController', {$scope: scope});

    expect(scope.blocks.length).toBe(3);
  }));
  
});
