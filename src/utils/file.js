import fs from 'fs'
import path from 'path'

export class File {
  constructor(filePath) {
    this.filePath = filePath
    this.projectPath = process.env.PWD
  }

  get content() {
    try {
      return fs.readFileSync(path.join(this.projectPath, this.filePath), 'utf8')
    } catch (e) {
      throw new Error('Error: No such file or directory.')
    }
  }
}
