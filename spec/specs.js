describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.eql("please enter a numeral");
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
