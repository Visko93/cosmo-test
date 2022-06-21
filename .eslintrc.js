module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@babel/new-cap": "off",
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/no-namespace": "off",

    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",

    // for CatchBoundaries
    "@typescript-eslint/no-throw-literal": "off",
    "testing-library/no-await-sync-events": "off",

    "@typescript-eslint/consistent-type-imports": "warn",
  },
};
