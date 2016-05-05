'use strict';
require('should');
const mylib = require('../index');
let bu = 'none';

describe('My First Test', () => {
	describe('Welcome to Demo', () => {
		before(() => bu = 'Tmall');
		after(() => bu = 'none');
		it('should get "Hello Tmall"', () => {
			mylib(bu).should.be.eql('Hello Tmall');
		});
	});
	describe('Welcome to Demo', () => {
		before(() => bu = 'Demo');
		after(() => bu = 'none');
		it('should get "Hello Demo"', () => {
			mylib(bu).should.be.eql('Hello Demo');
		})
	});
});