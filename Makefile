install:
	npm install
start: 
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm run prepublish
lint:
	npm run eslint