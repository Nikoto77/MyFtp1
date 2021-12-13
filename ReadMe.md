# MYFtp Project

The project realized by Nicolas Floris in B3CDGP at EFREI PARIS. MyFtp is a NodeJS compatible. 


### Prerequisites

MYFTP requires Node.js v14+ to run. 

### Installing

It's necessary to install the dependencies with npm install.

```
npm install
```

## Running the tests

For run the tests it's necessary to use 

```
npm run dev
npm run build   
npm run start
```


### Commands

The different command that user can make:

```
USER <username>: check if the user exist
PASS <password>: authenticate the user with a password
LIST: list the current directory of the server
CWD <directory>: change the current directory of the server
RETR <filename>: transfer a copy of the file FILE from the server to the client (not finish)
STOR <filename>: transfer a copy of the file FILE from the client to the server (not finish)
PWD: display the name of the current directory of the server
HELP: send helpful information to the client
QUIT: close the connection and stop the program
```

## License

This project is not complete but it works. Enjoy !

## Acknowledgments

* if you want to put me a good rating for a noob of coding, I will be very happy.

