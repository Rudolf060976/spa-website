module.exports = {
    "env": {
        "browser": true,
		"es6": true,
		"node": true, 
		"jest": true
    },
    "extends": ["eslint:recommended",
	"plugin:react/recommended","airbnb"	
],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react","babel"
    ],
    "rules": {
		"arrow-parens":"off",
		"comma-dangle":"off",
		"function-paren-newline":"off",
		"max-len":[1,120],
		"no-param-reassign":"off",
		"reaact/require-default-props":"off",
		"linebreak-style":["off","windows"],
		"react/prefer-stateless-function":["off"],
		"padded-blocks":["off"],
		"no-tabs":["off"],
		"indent":["warn","tab"],
		"react/jsx-indent":["warn",'tab'],
		"no-trailing-spaces":["off"],
		"react/jsx-one-expression-per-line":["off"],
		"no-unused-vars":["warn"],
		"react/destructuring-assignment":["off"],
		"react/no-access-state-in-setstate":["warn"],
		"arrow-body-style":["warn","always"],
		"no-multiple-empty-lines":["warn"],
		"func-names":["off"],
		"prefer-arrow-callback":["warn"],
		"no-underscore-dangle":["off"],
		"prefer-template": ["off"],
		"no-plusplus": ["off"],
		"no-named-as-default": ["off"],
		"max-len": ["off"]
    }
};