"use strict";
import Publisher from 'rabbitmq-pubsub';

describe('PublisherSubscriber', function() {
  this.timeout(20e3);
  let testMngr = require('../testManager');
  let publisher;

  before(function(done) {
      testMngr.start().then(done, done);
  });
  after(function(done) {
      testMngr.stop().then(done, done);
  });

  beforeEach(function(done) {
    done();
  });

  describe('StartStop', function() {
    it.skip('should start and stop the publisher', function(done) {
      publisher = new Publisher({exchange:"user.new"});
      function onMessage(message){

      }
      publisher.start(onMessage).delay(1e3).then(publisher.stop).then(done, done);
    });
  });
});
