describe("pingPong", function() {
	it('should reject non number inputs', function() {
		expect(pingPong('foo')).to.equal("please enter a numeral");
	})
})