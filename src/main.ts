import * as core from '@actions/core'
import get from 'lodash/get'
import yaml from 'js-yaml'
import fs from 'fs'

async function run(): Promise<void> {
  try {
    const file_path: string = core.getInput('path')
    const file = yaml.load(fs.readFileSync(file_path, 'utf-8'))
    const values = core.getInput('values')
    for (const [key, value] of Object.entries(values))
      core.setOutput(key, get(file, value))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
