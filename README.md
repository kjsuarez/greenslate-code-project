# DbCodeChallenge

A test project for Greenslate

## Development setup

Run `ng serve` for an Angular dev server located at `http://localhost:4200/`. 
Run `npm start` for a Node Server.

## setting up DB

The project runs on MongoDB, you can find Mongo setup info here- `https://www.mongodb.com/download-center/community`.
Currently the Node server is set to load the development db from an environment variable.

## Seeding DB
The project specified a preseeded database, so I wrote a script that seeds a local Mongo db.
You can run it from `npm run seed`, or just go to `http://localhost:3000/seed`.

## Live Server
If setting up Mongo is too much trouble, I went ahead and set up a live version here: `https://kjsuarez.github.io/greenslate-code-project/`.
The Node backend can be found here: `https://greenslate-code-challenge.herokuapp.com/`.
