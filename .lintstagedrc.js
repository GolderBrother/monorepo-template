// .lintstagedrc.js
module.exports = {
  // 新增暂存区代码的单元测试
  './packages/delta-i18n-cli/src/**/*.ts': 'jest --bail --findRelatedTests',
  './packages/delta-i18n-translate-utils/src/**/*.ts': 'jest --bail --findRelatedTests',
  '*.{jsx,md,json,js}': ['prettier --cache --write'],
  '*.ts?(x)': ['eslint --fix', 'prettier --cache --parser=typescript --write'],
}
