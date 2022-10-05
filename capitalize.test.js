const {firstLetterCapitalied} = require('./capitalizFirstletter')

test('change firt letter into a capital letter', () => {
    expect(firstLetterCapitalied("home")).toBe('Home')
});