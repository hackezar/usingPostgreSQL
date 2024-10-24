#! /usr/bin/env node

const { Client } = require("pg");

const dotenv = require('dotenv');
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();