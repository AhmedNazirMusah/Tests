const {strLength , reverseString} = require('./functionStrings')

describe('checking String length and string reverse', () => {
    test('length of string', () => {
        expect(strLength('hello')).toBe(5)
    })

    test('reversed string', () => {
        expect(reverseString('hello')).toBe('olleh')
    })
})