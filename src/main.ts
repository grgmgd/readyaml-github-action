import * as core from '@actions/core'
import get from 'lodash/get'
import yaml from 'js-yaml'
import fs from 'fs'

async function run(): Promise<void> {
  try {
    const file_path: string = core.getInput('path')
    const file = yaml.load(fs.readFileSync(file_path, 'utf-8'))
    console.log(file)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
