```sh
  sudo yarn add jest -D
  sudo yarn jest --init

  Y node Y Y 

  sudo yarn add --dev @sucrase/jest-plugin
  sudo yarn add -D @types/jest
```

- ./jest.config.js
```js
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};

```

- nodemon.json
```js
{
  "execMap": {
    "js": "sucrase-node"
  },
  "ignore": ["__tests__"]
}

```

# Testar test
- __tests__/example.test.js
```js
function soma(a, b) {
  return a + b;
}

test('if I call soma function with 4 and 5 it should return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
```

```sh
yarn test 
```