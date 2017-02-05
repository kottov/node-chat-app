const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'testuser';
        var text = 'test text';

        var message = generateMessage(from, text);

        expect(message).toInclude({ from, text });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        var from = 'testuser';
        var latitude = 19;
        var longitude = 45;
        var url = `https://www.google.com/maps/?q=${latitude},${longitude}`;

        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage).toInclude({ from, url });
        expect(locationMessage.createdAt).toBeA('number');
    });
});