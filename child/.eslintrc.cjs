module.exports = {
  parser: "vue-eslint-parser", // 解决 Parsing error: '>' expected 报错
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-essential", // 使用插件支持vue3
    // 如果你没有安装第7步,以下两个包不要引入,否则报错
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname, // 新增
    project: ["tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".vue"]
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    // "@typescript-eslint/no-unused-var": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "warn"
  }
};
