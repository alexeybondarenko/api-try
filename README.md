# api-try

Example Node JS API project. I tried to create boilerplate for Mobile Backend using:
- Node JS
- Hapi
- Mongo DB

In project also use the packages as:
- Good - logging
- Boom - error wrapping

## Project Structure

Application starts from `app.js` file. There are the server and plugins configurations.

The routes of the API are stored in the `server/routes.js` file. There is also configurated the configs, such as authentication scheme or parameters validations.

The handler are separated by modules. Every module placed on the folder `modules/[module name]`. 

Basicaly module consist from:
- controller - main handler function
- schema - MongoDB schema
- model - MongoDB model, created from schema
