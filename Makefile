gendiff:
	node gendiff.js
lint: 
	eslint .
test-coverage:
	npm test -- --coverage --coverageProvider=v8