# edge15-nodejs-ws
Workshop project for Edge Academy at Netlight 2015

This workshop project will help you create an CRUD (Create, Read, Update, Delete) api with the use of several super popular NodeJs tools.

The "end" result will leave you with a working database connection to MongoDB and
will make use of the [Express] & [Mongoose] packages.

Step one: Follow the setup instructions below.
Step two: Follow the workshop instructions below (or go crazy and CRUD by yourself).

# Setup:

```sh
$ npm install
```

# Development:

```sh
    $ npm run start
    
    $ npm run debug ( Make sure to install node-inspector first)
```

# Workshop instructions:

## Prerequisites
* [Git](http://git-scm.com/downloads) - Required for cloning the startup project
* [NodeJs](http://nodejs.org/) - Will install Node and NPM (or use [NVM](https://github.com/creationix/nvm))
* [MongoDB](http://docs.mongodb.org/manual/installation/) - Install MongoDB engine by following the online instructions

# "End result"
In this example Workshop we'll create a database with the following data-tree.

- Netlight (database)
 - Office
  - city: String
  - country: String
 - Employee
  - name: String
  - level: String
  - office: ObjectId


## Development steps
These steps are here to help you get started with the workshop.
Use if you get stuck.

### Setup connection to MongoDB database
 - open "app.js"
 - Add code to connect to a local MongoDB
 - Print a console log to show when successful
 - Need help? View some example code below, view docs or just ask.
```
    mongoose.connect('mongodb://localhost/netlightdb', function(err) {
        if(err) {
            return console.error('Failed to connect to mongodb');
        }
        consolg.log('Connection open');
    });
```

### Create Mongoose Schemas and Models
 - Create a new directory "./models"
 - Add a two files "office.js" & "employee.js"
 - Create Mongoose Schemas and Models according to the example in "Database structure"
 - Need help? View some example code below, view docs or just ask.
 - Docs for [schemas](http://mongoosejs.com/docs/guide.html) and [models](http://mongoosejs.com/docs/models.html)
```
    var personSchema = new mongoose.Schema({
        name: String,
        country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' }
    });
    mongoose.model('person', personSchema);
```

### Create a new get Express route

### Create post-route with save method for Office and Employee

### Create get-route with find method for Office and Employee

### Create delete-route with remove method for Office and Employee

# Official documentations:
  - NodeJs docs: http://nodejs.org/documentation/
    - Nodeschool: http://nodeschool.io/#workshoppers
  - ExpressJs routing: http://expressjs.com/guide/routing.html
  - MongoDB: http://www.mongodb.org/
  - Mongoose: http://mongoosejs.com/docs/guide.html

# Good luck!

[mongoose]:http://mongoosejs.com/
[node.js]:http://nodejs.org
[express]:http://expressjs.com
