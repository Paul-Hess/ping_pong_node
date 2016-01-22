describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.eql("please enter a numeral");
	});

	it('should allow number inputs', function() {
		expect(pingPong(3)).to.eql([1, 2, 'ping']);
	});

	it('should return number when number is input', function() {
		expect(pingPong(7)).to.eql([7]);
	});

	it('should return pingpong for input of factor of 15', function() {
		expect(pingPong(45)).to.eql("pingpong");
	});

	it('should not return pingpong for input of non-factor of 15', function() {
		expect(pingPong(42)).to.not.eql("pingpong");
	});

	it('should return pong for factors of 5', function() {
		expect(pingPong(65)).to.eql("pong");
	});

	it('should not return pong for non-factors of 5', function() {
			expect(pingPong(30)).to.not.eql('pong');
		});

	it('should return ping for factors of 3', function() {
		expect(pingPong(21)).to.eql('ping');
	});

	it('should not return ping for non-factors of 3', function() {
		expect(pingPong(23)).to.not.eql('ping');
	});

	it('should return all numbers in the range with the ping and pong exceptions', function() {
		expect(pingPong(12)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping'])
	});
});

describe('numberReturn', function() {
	it('should return pingpong for input of factor of 15', function() {
		expect(numberReturn(45*7)).to.eql("pingpong");
	});

	it('should not return pingpong for input of non-factor of 15', function() {
		expect(numberReturn(43*7)).to.not.eql("pingpong");
	});

	it('should return pong for factors of 5', function() {
		expect(numberReturn(6860)).to.eql('pong');
	});

	it('should not return pong for non-factors of 5', function() {
			expect(numberReturn(34)).to.not.eql('pong');
		});

	it('should return ping for factors of 3', function() {
		expect(numberReturn(432)).to.eql('ping');
	});

	it('should not return ping for non-factors of 3', function() {
		expect(numberReturn(35)).to.not.eql('ping');
	});
});
