import { JSONFile } from './jsonFile'

describe('JSONFile', () => {
  describe('when the json is valid', () => {
    it('return the content as json', () => {
      const object = {
        en: { foo: 'bar' },
      }
      expect(new JSONFile(object).toYAML()).toEqual('en:\n  foo: bar\n')
    })
  })

  describe('when the json is invalid', () => {
    it('throws an error', () => {
      const invalidObjects = [function() {}, /regex/]
      invalidObjects.forEach(object =>
        expect(() => new JSONFile(object).toYAML()).toThrow()
      )
    })
  })
})
