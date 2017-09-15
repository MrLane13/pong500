'use strict';

// Let's write some tests

describe('pong500 game', function() {

  describe('gameCanvas', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should display the blocks', function() {
      var blocks = element.all(by.repeater('block in $ctrl.blocks'));

      expect(blocks.count()).toBe(0);
    })
  });
});
