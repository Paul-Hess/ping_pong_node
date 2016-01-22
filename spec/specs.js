describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.equal("please enter a numeral");
	});

	it('should allow number inputs', function() {
		expect(pingPong(5001)).to.equal(5001);
	});

	it('should return number when number is input', function() {
		expect(pingPong(7)).to.equal(7);
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(45)).to.equal("pingpong");
	});

	it('should not return pingpong for input of non-factor of 15', function() {
		expect(pingPong(42)).to.not.equal("pingpong");
	});

	it('should return pong for factors of 5', function() {
		expect(pingPong(65)).to.equal("pong");
	})

});

describe('numberReturn', function() {
	it('should return pingpong for input of factor of 15', function() {
		expect(numberReturn(45*7)).to.equal("pingpong");
	});

	it('should not return pingpong for input of non-factor of 15', function() {
		expect(numberReturn(43*7)).to.not.equal("pingpong");
	});
});
