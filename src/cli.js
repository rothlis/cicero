'use strict'

const { spawn } = require('child_process')

function run(args) {
  console.log('Hello!', args)

  const ls = spawn('yarn', ['start'])

  ls.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
  })

  ls.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
  })

  ls.on('close', code => {
    console.log(`child process exited with code ${code}`)
  })
}

module.exports = {
  run,
}
