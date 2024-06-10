import { reverseString, coreFunction } from '@golderbrother/core'
import { package1Function } from '../src'
import { describe, expect, it } from 'vitest'

describe('reverseString', () => {
  it('should reverse the input string', () => {
    const input = 'golderbrother'
    const expectedOutput = 'rehtorbredlog'
    expect(reverseString(input)).toBe(expectedOutput)
  })
})

describe('coreFunction', () => {
  it('should return an object with a message property', () => {
    const response = coreFunction()
    expect(response).toHaveProperty('message')
  })
})

describe('package1Function', () => {
  it('should return a Package1Response with a modified message', () => {
    const coreResponse = coreFunction()
    const expectedMessage = `Package1: ${coreResponse.message}`
    const package1Response = package1Function()
    expect(package1Response).toEqual({ message: expectedMessage })
  })
})
