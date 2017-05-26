# atmosphere

Init Settings
1. ./node_modules/eslint-confing-airbnb/rules/react.js
  - slash 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }]
  - slash 'react/prefer-stateless-function': ['error', { ignorePureComponents: true }]

2. ./.eslintrc 
  - change code to 
  {
  "extends": "./index.js",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0
    }
  }

3. Directory(folder) name always in lower-case letter.
4. File name always in PascalCase.
5. Component name always same as file name ( component name = file name , which is in PascalCase)


