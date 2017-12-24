import { YAMLFile } from './yamlFile'

describe('YAMLFile', () => {
  describe('when the yaml is valid', () => {
    it('return the content as json', () => {
      const string = 'en:\n  foo: bar\n'
      expect(new YAMLFile(string).toJSON()).toEqual({
        en: { foo: 'bar' },
      })
    })
  })

  describe('when the yaml is invalid', () => {
    it('throws an error', () => {
      const invalidString = ['%foo%']
      invalidString.forEach(string =>
        expect(() => new YAMLFile(string).toJSON()).toThrow()
      )
    })
  })
})
