import { File } from './file'

describe('File', () => {
  describe('when the file is valid', () => {
    it('return the content', () => {
      expect(new File('./fixtures/locales/en.yml').content).toEqual(
        'en:\n  foo: bar\n'
      )
    })
  })

  describe('when the file is invalid', () => {
    it('throws an error', () => {
      expect(() => new File('foo').content).toThrow()
    })
  })
})
