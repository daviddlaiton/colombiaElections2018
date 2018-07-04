# Colombia Elections 2018

The objective of this project was to create a web page that help show all the information related to the elections in Colombia. 

## Getting Started
To get a copy of these project install git bash, open it from the command line and use 
$ git clone: https://github.com/daviddlaiton/colombiaElections2018.git

Then, open the frontend folder directory and run

$ npm install

To deploy the application run 
$ npm start

### Prerequisites

Firstly, you need to install nodeJS, the installer can be downloaded from: https://nodejs.org/es/
Be sure to select the install npm option and the addToPATH option during the installation process.

Checklist
```
NodeJS
```

### Installing

Go to the open the frontend folder directory and run the npm install command.

```
$ npm install
```
The application should be running in localhost:3000.


## Deployment

To deploy the application on a live environment, you should go to the front end directory and run 
```
yarn build
```
This should generate a build folder.

Finally, modify the server.js file located in the root directory so that it serves the files inside build folder as static content
```
    app.use(express.static(path.join(__dirname, "frontend/build")));
```

## Built With

* [React](https://reactjs.org/) - The javascript library used to develop the front-end.
* [NPM](https://www.npmjs.com/) - Dependency Management


## Author

* **Andrés David Laiton** - [daviddlaiton](https://github.com/daviddlaiton)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
