describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.equal("please enter a numeral");
	});

	it('should allow number inputs', function() {
		expect(pingPong(5002)).to.equal(5002);
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
	});

	it('should not return pong for non-factors of 5', function() {
			expect(pingPong(30)).to.not.equal('pong');
		});

	it('should return ping for factors of 3', function() {
		expect(pingPong(21)).to.equal('ping');
	});

	it('should not return ping for non-factors of 3', function() {
		expect(pingPong(23)).to.not.equal('ping');
	});

});

describe('numberReturn', function() {
	it('should return pingpong for input of factor of 15', function() {
		expect(numberReturn(45*7)).to.equal("pingpong");
	});

	it('should not return pingpong for input of non-factor of 15', function() {
		expect(numberReturn(43*7)).to.not.equal("pingpong");
	});

	it('should return pong for factors of 5', function() {
		expect(numberReturn(6860)).to.equal('pong');
	});

	it('should not return pong for non-factors of 5', function() {
			expect(numberReturn(34)).to.not.equal('pong');
		});

	it('should return ping for factors of 3', function() {
		expect(numberReturn(432)).to.equal('ping');
	});

	it('should not return ping for non-factors of 3', function() {
		expect(numberReturn(35)).to.not.equal('ping');
	});
});
