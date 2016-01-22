describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong(-1)).to.equal(undefined);
	});

	it('should not return a number array for input 0', function() {
		expect(pingPong(0)).to.equal(undefined);
	});

	it('should not handle oversized numbers for the browser to handle jQuery animation', function() {
		expect(pingPong(1001)).to.equal(undefined);
	});

	it('should allow number inputs', function() {
		expect(pingPong(3)).to.eql([1, 2, 'ping']);
	});

	it('should return array when number is input', function() {
		expect(pingPong(7)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7]);
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(15)).to.include('pingpong');
	});

	it('should return pingpong for input of factor of 5', function() {
		expect(pingPong(5)).to.include('pong');
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(3)).to.include('ping');
	});

	it('should return proper array 15 is input', function() {
		expect(pingPong(15)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong']);
	});

	it('should pass number to numberReturn and get array back', function() {
		expect(pingPong(3)).to.satisfy(function() {return []});
	});

	it('should not return pingpong when 15 is not satisfied', function() {
		expect(pingPong(14)).to.not.include('pingpong');
	});

	it('should not return pong when 5 is not satisfied', function() {
		expect(pingPong(4)).to.not.include('pong');
	});

	it('should not return ping when 3 is not satisfied', function() {
		expect(pingPong(2)).to.not.include('ping');
	});

});

describe('numberReturn', function() {
		it('should return array when number is input', function() {
		expect(pingPong(9)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping']);
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(15)).to.include('pingpong');
	});

	it('should return pingpong for input of factor of 3', function() {
		expect(pingPong(3)).to.include('ping');
	});

	it('should return pingpong for input of factor of 5', function() {
		expect(pingPong(5)).to.include('pong');
	});

	it('should return proper array when all  ping and pong factors are considered as input', function() {
		expect(pingPong(30)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong', 16, 17, 'ping', 19, 'pong', 'ping', 22, 23, 'ping', 'pong', 26, 'ping', 28, 29, 'pingpong']);
	});

});
