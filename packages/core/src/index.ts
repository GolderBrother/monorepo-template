import type { CoreResponse } from './types'

/**
 * 反转字符串
 * @param str 字符串
 * @returns 反转后的字符串
 * @example reverseString('hello') => 'olleh'
 */
export const reverseString = (str: unknown): string => {
  if (typeof str !== 'string') {
    throw new Error('参数必须是字符串');
  }
  return str.split('').reverse().join('');
};

export const coreFunction = (): CoreResponse => ({ message: 'Response from core' })

export * from './types'
