const pgp = require("pg-promise")({});

const db = pgp("postgres://localhost:5432/broken_project");

module.exports = db; 

