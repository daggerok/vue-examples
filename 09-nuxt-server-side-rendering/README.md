# 09-nuxt-server-side-rendering

Github pages deployment:

package.json
```json
{
  "homepage": "https://daggerok.github.io/vue-examples",
  "scripts": {
   "precommit": "npm run lint",
   "predeploy": "yarn install; npm-run-all predeploy:*",
   "predeploy:lint": "yarn lint",
   "predeploy:clean": "rimraf -rf dist",
   "predeploy:generate": "cross-env NODE_ENV=gh-pages nuxt generate",
   "predeploy:fallback": "ncp ./dist/index.html ./dist/404.html",
   "deploy": "gh-pages -d ./dist -b gh-pages -m \"Github Pages $(date +%Y-%m-%d) deployment\""
  },
  "devDependencies": {
    "cross-env": "5.0.5",
    "gh-pages": "1.0.0",
    "ncp": "2.0.0",
    "npm-run-all": "4.0.2",
    "rimraf": "2.6.1"
  }
}
```

nuxt.config.js

```javascript
const base = 'gh-pages' === process.env.NODE_ENV ? '/vue-examples/' : '/';

module.exports = {
  router: {
    base,
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: base + 'favicon.ico' },
    ],
  },
  build: {
    publicPath: '/static/',
  },
};
```

## build run and deploy

``` bash
yarn dev
yarn lint
yarn build
yarn start
yarn genetrate
yarn predeploy
yarn deploy
```

**auto generated part**:

> Nuxt.js server-side rendenring with Vue.js

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
