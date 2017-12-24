import yaml from 'js-yaml'

export class JSONFile {
  constructor(object) {
    this.object = object
  }

  toYAML() {
    return yaml.safeDump(this.object)
  }
}
