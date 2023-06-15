const { v4: uuidV4 } = require("uuid");

const getRoom = async (req, res, next) => {
  res.render("room", { roomId: req.params.room });
};

const redirectRoom = async (req, res, next) => {
  res.redirect(`/${uuidV4()}`);
};

module.exports = { getRoom, redirectRoom };
