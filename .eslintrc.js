module.exports = {
  overrides: [
    {
      files: ["*.js"],
      parser: "babel-eslint"
    },
    {
      files: ["*.ts"],
      extends: ["alloy", "alloy/typescript"],
      parser: "@typescript-eslint/parser"
    }
  ]
};
