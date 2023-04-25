instal:
	npm ci
gendiff:
	node gendiff.js
lint: 
	eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8