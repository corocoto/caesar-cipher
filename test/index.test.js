const cipher = require('../cipher');

describe('Caesar Cipher', function () {
	let Cipher;
	beforeEach(() => Cipher = new cipher.RunCipher());

	it('should return \'rld!Hello wo\' string if real phrase is \'Hello world!\' and the shift is made by 4 characters', () => expect(Cipher.getRes('Hello world!', 4)).toEqual('rld!Hello wo'));

	it('should return throw if value of number argument is equal NaN', () => {
		expect(() => Cipher.getRes('Hello world!', NaN)).toThrow('incorrect number value');
	});

	it('should return throw if value of number argument is less than 0', () => {
		expect(() => Cipher.getRes('Hello world!', -1)).toThrow('incorrect number value');
	});


	it('should return same value if set 0 for number argument', () => {
		expect(Cipher.getRes('Hello world!', 0)).toEqual('Hello world!');
	});
});
