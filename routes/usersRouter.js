const { Router } = require("express");
const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.newUserFormGet);
usersRouter.post("/new", usersController.newUserFormPost);

usersRouter.get("/search", usersController.getUserSearch)

usersRouter.get("/delete", usersController.deleteAllUsers);

module.exports = usersRouter;