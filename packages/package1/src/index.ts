import { reverseString, coreFunction } from '@golderbrother/core'
import type { Package1Response } from './types'

console.log(reverseString('golderbrother'))
console.log(coreFunction().message)

export const package1Function = (): Package1Response => {
  const coreResponse = coreFunction()
  return { message: `Package1: ${coreResponse.message}` }
}

export * from './types'
