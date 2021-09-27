const express           = require("express")
const router            = express.Router()

const userController    = require("./../controllers/userController")

const isLoggedIn        = require("./../routes/middlewares/route-guard")

const routeGuards = require("./../routes/middlewares/route-guard")

router.get("/profile", routeGuards.isLoggedIn, userController.createProfile)


module.exports = router