# How to run?

Install first the dependencies of my client and server folder.\
Client - is the base directory.\
Server - is the server folder in directory.

### `Starting the App`

cd to server directory, run 'npm run dev' to the terminal.\
this will run both the server and the client using concurrently.

Also make sure to make a '.env' file to the server and put your JWT_TOKEN && MONGODB_CONNECTION_STRING.\
you can go here https://jwt.io to generate you own jwt. and create an account for MongoDB to get your own connection.

### `.env format`
JWT_TOKEN=youjwttoken.\
MONGODB_CONNECTION_STRING=yourownconnectionstring.

After you done these things, starting 'npm run dev' in server directory will make the app run smoothly.\
Enjoy, Happy Coding!.