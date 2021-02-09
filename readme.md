create database chatapp in your postgres server

create serverPostgraphileSchema/.env file with following content

POSTGRES_USER = postgres
POSTGRES_PASSWORD = admin
POSTGRES_DATABASE = chatapp
PORT = 5000
POSTGRES_SCHEMA="chatapp"
JWT_SECRET="somejwtsecret123"
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_SERVICE=
EMAIL_PORT=
EMAIL_FROM=

move into folders client and serverPostgraphileSchema and run npm install
move into sqitch folder and run sqitch deploy
after the database is deployed, from serverPostgraphileSchema folder run nodenom index
and npm start from client folder
