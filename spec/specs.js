var expect = require('chai').expect;
var pingPong = require('./../js/pingPong.js').pingPong;

describe("pingPong", function() {

	it('should return a number ', function() {
		expect(pingPong(2)).to.eql([1, 2]);
	});

	it('should return ping when 3 is input', function() {
		expect(pingPong(3)).to.eql([1, 2, 'ping']);
	});

	it('should return pingpong for input of factor of 5', function() {
		expect(pingPong(5)[4]).to.equal('pong');
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(15)[14]).to.equal('pingpong');
	});

	it('should return proper string for more than just the first factor', function() {
		expect(pingPong(30)[3]).to.equal(4);
		expect(pingPong(30)[5]).to.equal('ping');
		expect(pingPong(30)[9]).to.equal('pong');
		expect(pingPong(30)[29]).to.equal('pingpong');
	});

});

