# Mutithread Express Server

This is a starter project for node express server with typscript

## Getting started

1. `yarn init -2` : Initialize the project
2. `yarn add express dotenv` : Add server dependency
3. `yarn add -D typescript @types/express @types/node` : Add Typescript dependency
4. `yarn add -D rimraf nodemon` : setup the development
5. `yarn dev` : start development
6. `yarn build` : build the project

## Flow of Application

1. Server run in the background.
2. calling endpoint `/prime?number=454`
3. Server start a child process and send message & listen for reponse.
4. child start & calculate the number and send back the response.
