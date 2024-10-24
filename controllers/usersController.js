// controllers/usersController.js

const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 ad 10 characters";

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
];

async function usersListGet (req, res) {
    try {
    const usernames =  await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("index", {
        title: "Users",
        usernames: usernames,
    })
    } catch(e) {
        console.log(e);
    }
}

async function newUserFormGet(req, res) {
    res.render("newUserForm", {
        title: "New User",
    })
}

async function newUserFormPost(req, res){
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function getUserSearch(req, res) {
    const input = req.query.input;
    const results = await db.searchUsers(input);
    res.render("results", {
        title: "Search Results",
        results: results.rows,
    })
}

async function deleteAllUsers(req, res) {
    await db.deleteAllUsers();
    console.log("Users deleted");
    res.redirect("/");
}

module.exports = {
    usersListGet,
    newUserFormGet,
    newUserFormPost,
    getUserSearch,
    deleteAllUsers,
};