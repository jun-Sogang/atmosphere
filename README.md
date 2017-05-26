# atmosphere

Init Settings
1. ./node_modules/eslint-confing-airbnb/rules/react.js
  - slash 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }]
  - slash 'react/prefer-stateless-function': ['error', { ignorePureComponents: true }]

2. ./.eslintrc 
  - change code to 
{ <br>
  "parser": "babel-eslint",<br>
  "env": {<br>
    "browser": true,<br>
    "node": true<br>
  },<br>
  "extends": "airbnb"<br>
}<br>

3. Directory(folder) name always in lower-case letter.
4. File name always in PascalCase.
5. Component name always same as file name ( component name = file name , which is in PascalCase)


