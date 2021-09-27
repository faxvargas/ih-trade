const express = require("express")
const router = express.Router()
const authController = require("./../controllers/authController")
const routeGuards = require("./../routes/middlewares/route-guard")

router.get("/signup",routeGuards.isLoggedOut,authController.createUser)
router.post("/signup",authController.createUserForm)
router.get("/login",routeGuards.isLoggedOut,authController.loginUser)
router.post("/login",authController.loginUserForm)
router.post("/logout",authController.logoutUser)

module.exports = router