## React package starterkit

A simple boilerplate to get started with building a js package with a demo project

 - incldes demo project to use package
 - bundles package
 - handles imported css file in package
 - a bit of tree shaking

package name: tablio
demo project: demo-tablio

### Getting started 

Clone the repo

Move into package folder `cd tablio` and run
```js
// install dependencies
npm install

// start webpack and watch files
npm start

// link package and peer dependencies
npm link

cd node_modules/react
npm link
```

From the repo root directory, move into the demo project `cd demo-tablio` and run the following

```js
npm install

// install package and link react
npm link tablio 
npm link react
```

Start demo project
`npm start`
