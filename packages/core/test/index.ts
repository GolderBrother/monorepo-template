import { reverseString, coreFunction } from '../src'
import { describe, expect, test } from 'vitest'

describe('reverseString', () => {
  test('should reverse the input string', () => {
    expect(reverseString('hello')).toBe('olleh')
  })

  test('should throw an error if the input is not a string', () => {
    expect(() => reverseString(42)).toThrow('参数必须是字符串')
  })
})

describe('coreFunction', () => {
  test('should return a CoreResponse object with a message property', () => {
    const result = coreFunction()
    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('message', 'Response from core')
  })
})
