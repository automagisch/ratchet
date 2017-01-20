# App Starter
A simple and clean boilerplate for quickly kickstarting new projects. Very minimal integration with much power.

## Basic guides

### Clone
Clone this remote repository to your computer:
```
$ git clone git@github.com:koenhoutman1991/app-starter.git
```

After you're done, navigate to the locally cloned repository:
```
$ cd app-starter
```

### Install
Install all npm and bower dependencies (bower will be ran automagically after npm install finished):
```
$ npm install
```

### Start
Boot the server and start the gulp process simultaneously:
```
$ npm start
```

### Build
Build a single distribution build without watching or serving:
```
$ npm run build
```

### Serve HTML files
serving HTML files can be done using the /:file_name route. What this does is search for an HTML file with the `file_name` parameter. If found, it will serve that file (without the .html in it).
So imagine you have a file 'myawesomepage.html', you can simply serve it by browsing to `localhost:[port_number]/myawesomepage`.