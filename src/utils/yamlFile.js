import yaml from 'js-yaml'

export class YAMLFile {
  constructor(string) {
    this.string = string
  }

  toJSON() {
    return yaml.safeLoad(this.string)
  }
}
