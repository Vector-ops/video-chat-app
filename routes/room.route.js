const express = require("express");
const { getRoom, redirectRoom } = require("../controllers/room.controller");
const router = express.Router();

router.route("/").get(redirectRoom);

router.route("/:room").get(getRoom);

module.exports = router;
