module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  // 共享配置：配置 TypeScript 推荐的校验规则
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    // 新增 Jest 推荐的 ESLint 校验规则
    // 所有规则集查看：https://github.com/jest-community/eslint-plugin-jest#rules（recommended 标识表明是推荐规则）
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  // 解析器：将 TypeScript 的 AST 转换成兼容 ESLint 的 AST
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 插件：提供 TypeScript 校验规则的实现
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
}
