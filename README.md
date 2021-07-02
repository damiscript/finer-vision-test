# Finer Vision Test Submission

This file contains information on how to use and set up the submission.

## NOTE

For submission purposes, the .env files for a local environment have been included.

## DB Setup

Please see the "finer_vision.sql" for the schema regarding the database and import it to the database of your choice.

## Client Setup

Create a .env file at the root directory of the "client" folder within the project and pass it a key "REACT_APP_API_URL", which defines the API endpoint for the application.

Ensure the Server is running before attempting to perform any command that requires data fetching or submission.

## Server Setup

Ensure the database is up and running with the database and table configured.

Create a .env file at the root directory of the "server" folder

Within the .env file provide the required settings DB_USER, DB_PASSWORD, DB_HOST and DB_DATABASE. You can see below an example of the. env file needed

```
DB_USER= root
DB_PASSWORD=
DB_HOST= localhost
DB_DATABASE= finer_vision
```

## Route Interactions

For this project, the server routes can be seen below:

Adds a user to the database

```
router.post("/api/users")
```

Gets a list of all the users from the database

```
router.post("/api/users")
```

These endpoints can also be examined within "/server/lib/users."

If you run into any issues while viewing the submission, please get in touch with me.
