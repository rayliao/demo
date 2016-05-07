'use strict';
require('should');
const mylib = require('../src/index');

describe('My First Test', () => {
  it('should get "Hello Demo"', () => {
    mylib().should.be.eql('Hello Demo');
  });
});