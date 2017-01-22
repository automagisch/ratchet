# Ratchet
Create fast up-to-date ratchet apps using the latest in accepted web technologies! Ratchet is a collection of new-skool development tools and libraries!

## Ratchet comes with:
Ratchet features a lot of cool nowadays hot stuff! Ratchet collects the following open source frameworks and packages:

+ [Node.js](https://nodejs.org/)
+ [Gulp](http://gulpjs.com/)
+ [Bower](https://bower.io/)
+ [ExpressJS](http://expressjs.com/)
+ [Handlebars](http://handlebarsjs.com/)
+ [ES6 (transpiled using babelify)](https://github.com/babel/babelify)
+ [Sass](http://sass-lang.com/)
+ [FontAwesome](http://fontawesome.io/)
+ [Normalize.css](https://necolas.github.io/normalize.css/)

### Installation
1. Clone ratchet to your machine from this repository and cd into that folder:
`$ git clone https://github.com/automagisch/ratchet.git && cd ratchet`

2. Install all NPM dependencies from package.json and install bower packages from bower.json
`$ npm install`

3. Start the server and start gulp tasks
`$ npm start`

4. Start developing, your app is hosted at [http://localhost:4200](http://localhost:4200/)

### building HTML, CSS and JavaScript
Ratchet aims to be quick and simple without any necessary configuration. Basically everything you do will be in `./src/`. This goes for JS, scss, images, html, fonts and handlebars. These directories are clean, they don't follow any build-specific instructions for any kind of thing, they just output directly to `./dist`. You are in total control how your source folder works! And yes, you can use importing features from ES6 and Sass (the folder your main js/scss file lives in is treated as the root)!

More info soon.