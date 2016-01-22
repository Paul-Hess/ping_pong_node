describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.equal("please enter a numeral");
	});

	it('should allow number inputs', function() {
		expect(pingPong(5000)).to.equal(5000);
	})
});