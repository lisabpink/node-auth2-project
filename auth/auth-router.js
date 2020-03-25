const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");


router.post("/register", (req, res) => {
    //define what will be the username & password
    const userInfo = req.body;
    //hash password
    const hash = bcrypt.hashSync(userInfo.password, 8);
    //override password with the hash
    userInfo.password = hash;
    //add user to db
    Users.add(userInfo)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json({ message: "Error registering user" });
      });
  });

module.exports = router;