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
	})
});