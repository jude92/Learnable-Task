const roomRouter = require("./roomRoute");
const roomTypeRouter = require("./roomTypeRoute");
const userRouter = require("./userRoute");

const router = require("express").Router();

router.use("/room", roomRouter);
router.use("/room-type", roomTypeRouter);
router.use("/auth", userRouter);

module.exports = router;
