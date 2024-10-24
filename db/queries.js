const pool = require("./pool");

async function getAllUsernames() {
    try {
        const { rows } = await pool.query("SELECT * FROM usernames");
        return rows;
    } catch(e) {
        console.log(e);
    }
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsers(input) {
    try {
    const results = await pool.query(`SELECT * FROM usernames WHERE LOWER(username) LIKE '%${input}%'`)
    return results;
    } catch (e) {
        console.log(e);
    }

}

async function deleteAllUsers() {
    try {
        await pool.query(`DELETE FROM usernames`);
        return;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsers,
    deleteAllUsers,
};