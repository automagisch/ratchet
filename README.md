# ![Ratchet](https://github.com/automagisch/ratchet/blob/master/master/ratchet.png?raw=true)

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

### Prerequisites
The build flow of Ratchet relies on a few dependencies that has to be pre-installed in order to
start using Ratchet. These are simple to install on every platform (OSX, Linux, Windows, all the platforms :)). Underneath is a description / checklist of packages and libraries required to run Ratchet properly.

**In short:**
Install these packages and libraries before starting Ratchet:

- [Node.js + NPM](https://nodejs.org/en/download/)
- [Sass](http://sass-lang.com/install)
- [Bower](https://bower.io/#install-bower)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

*note: Gulp 4.0 is used in Ratchet, this requires a little alternative installation, find out more here: https://demisx.github.io/gulp4/2015/01/15/install-gulp4.html*

**Not in short:**

1. **Install node.js (latest version will do!)**
node.js is the inner core of Ratchet, it will take care of serving the files!
[nodejs.org/download](https://nodejs.org/en/download/)

2. **If node.js did not auto-install NPM itself, install NPM**
npm is the package manager that comes with node.js. Ratches uses it to download, manage and upgrade Ratchet's node.js scripts and packages! (but most of the time node will install this for you, if not try the link below):
[how-to-install-npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

3. **Install the Sass library (RubySass)**
   relies on Ruby, comes with OSX by default but needs seperate installation. Ratchet uses your vendor RubySass library to compile your scss files to awesome css!

   **Install Ruby for Linux and Windows:**
   [www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/)

   **Install Sass (all platforms):**
[sass-lang.com/install](http://sass-lang.com/install)

4. **Get Bower**
Bower is a package manager (like npm) but more focussed on front-end (or client-side) libraries (like jQuery, bootstrap etc.). Bower is opinionated by the community, some say we should use it, others say we should go with NPM. But Ratchet goes with bower!
Front-end and back-end dependencies should be seperated at all times (in Ratchet's opinion, that is). In order to use bower, install it via NPM:
[bower.io/#install-bower](https://bower.io/#install-bower)

   ```bash
   $ npm install -g bower
   ```

   or (if you get permission errors)

   ```bash
   $ sudo npm install -g bower
   ```

5. **Last but not least, let Gulp enter the arena!**
Ratchet's build system is powered by Gulp - A powerfull and relatively simple task manager! Gulp takes care of processing your development files (like Babel (ES6) files, Sass files, Handlebars client precompilation, even your HTML!) and building them to a single build distribution. Gulp needs to be installed locally (as a command-line interface), however. No stress, get back to NPM and install that package! [Gulp - Getting Started on Github](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

   ```bash
   $ npm install -g gulp-cli
   ```

   Or again, go with sudo if you get permission errors:

   ```bash
   $ sudo npm install -g gulp-cli
   ```

### Installation
1. Clone ratchet to your machine from this repository and cd into that folder:
`$ git clone https://github.com/automagisch/ratchet.git && cd ratchet`

2. Install all NPM dependencies from package.json and install bower packages from bower.json (bower install will be auto-triggered after npm finishes)
`$ npm install` (if you get errors, try installing with `$ sudo npm install`)
*note: this installation procedure might take a while, grab some coffee!*

3. Start the server and start gulp tasks
`$ npm start`

4. Start developing, your app is hosted at [http://localhost:4200](http://localhost:4200/)
*tip: The port your app is hosted can be changed in config.ini*

### building HTML, CSS and JavaScript
Ratchet aims to be quick and simple without any necessary configuration. Basically everything you do will be in `./src/`. This goes for JS, scss, images, html, fonts and handlebars. These directories are clean, they don't follow any build-specific instructions for any kind of thing, they just output directly to `./dist`. You are in total control how your source folder works! And yes, you can use importing features from ES6 and Sass (the folder your main js/scss file lives in is treated as the root)!

### Handy-dandies
I've built in a few cool utility features that will help you front-ending along without having
to worry about it a lot.

**Serving static JSON over ajax:**
I've made an API mock route in express that passes static JSON to the client side. You can use these for simulating client-side AJAX calls! All you have to do is put a json file in the `data` directory. Then, you can request up that file (using GET, PUT, POST or DELETE methods) by passing in the filename (without JSON) after this url:

`localhost:4200/api/your-file-name`

This will serve up the json file with that filename and it will be available as your JSON response body! Not a single line of back-end code needed ;).

**Serving your HTML as if it were a route endpoint:**
Ratchet serves up the `./dist` folder and therefore treats it as the root of the server. To make things more needo and feel a bit less 'html-y' and a bit more 'app-y', you can request your html files by leaving out the .html extension.

In this case, Ratchet will ook for an html file corresponding to that filename and serve it up under that url! So if you have a file called 'documentation.html', you can serve it up by browsing to: `localhost:4200/documentation`. Crisp!

**Include common HTML stuff as a template**
Ratchet doesn't like huge-ass repetitive code. Especially not when it comes to HTML! That's why Ratchet uses the Gulp plugin [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)! Inside the `./src` folder in the html directory, you'll find index.html including two files: `./includes/html_head.html` and `./includes/html_foot.html`. Within these two tags, you can code away freely as if you were inside the `<body>` (fun fact, you are, actually.)! The results will be outputted as concatenated
HTML to `./dist`!

**Manage your bower assets**
Assets are assets, custom code is custom code! Bower understands this principle and therefore, Ratchet goes with this thought. Ratchet bundles assets as vendor distributions (noticed the vendor.css and vendor.js files in the distribution folder?). This all comes
together in the assets.json file, which is powered by a gulp package: [gulp-bower-assets](https://www.npmjs.com/package/gulp-bower-assets).

The only thing you need to do after installing a new Bower package (using `bower install`, refer to the bower docs for more info), you can insert the path to the installed source files in assets.json, which will be concatenated to single files to the distribution folder!

**Precompilated handlebars templates**
We love client-side javascript templating! It's the future, and Ratchet goes with Handlebars as an absolute utopia. Handlebars is a very minimal javascript templating language. It's used often as templates that need to be filled from AJAX response bodies.
In Ratchet, you have not to worry about any setup for this, Ratchet takes care of it for you!

Every `.hbs` template you'll create in `./src/handlebars` will get precompiled immediately by gulp, and becomes available as a  'templates.js' file. Ratchet includes handblebars by default, so all you need to do is insert this file in your HTML, and your templates will become available as `Handlebars.templates` as Handlebars Template functions. So, in short. If you have a file
`user-card.hbs` in your source directory and you want to compile it to HTML inside your app, do it like so:

```handlebars
{{!-- ./src/handlebars/user-card.hbs --}}
<div class="user-card">
	<h1>{{name}}</h1>
	<p>{{age}}</p>
</div>
```

```javascript
// main.babel

// get our template function from the precompiled namespacce
var userCardTemplate = Handlebars.templates['user-card'];
// JSON content to pass to the template
var content = {name:'John Doe', age: 28};
// output html, inject this to the body and kaboom! Magic :)
var html = UserCardTemplate(content);
```

More info about handlebars can be found on their website, it's awesome!:
[handlebars.js](http://handlebarsjs.com/)

This Gulp package taking care of the hbs precompilation in Ratchet:
[gulp-handlebars](https://www.npmjs.com/package/gulp-handlebars)

**Minification**
Minifying your code is easy, just run `gulp build --production` and minification is done automagically. This goes for seperate gulp tasks as well, like `gulp styles --production` and `gulp babel --production`.

### Configurables
There are (and will be) more easy configurables in Ratchet. They all live in config.ini, and can be changed there.

_Listening port_

Under the app section in config.ini, you can change the port your app is hosted locally. Defaults to `4200`

```ini
[app]
port = 4200
```

_enable/disable my awesome ascii art_

If you don't like the ascii art as much as I do, you can turn it off under the 'ratchet' section by setting the `show_ascii_art`
flag to `false`

```ini
[ratchet]
show_ascii_art = false
```

_enable/disable es6 or good 'ol javascript_
If you prefer to work with Javascript as we know it, you can configure so in config.ini. Ratchet automatically picks up on this
and

```ini
[ratchet]
use_es6 = false
```

## Changelog

### 1.0.2
- added minification features to compiled css and javascript
- fixed a critical installation bug by adding an init task to gulp (runs install and build when bower is done installing). (gulp install would throw errors because it was trying to run a gulp task before gulp was installed via npm).

### 1.0.1
- updated Gulp to v4.

### 1.0.0
- Initial version of Ratchet

## Planned features

- Add unit test functionality to ES6 javascript compilation [feature]
- Add support for easily setting up express directives (and thus Ratchet will be more like a web-app boilerplate) [feature]
- Create a good start for going with big javascript frameworks [feature]
