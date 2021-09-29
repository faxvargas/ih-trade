const express= require("express")
const router = express.Router()
const skinController = require("./../controllers/skinController")

router.get("/create",skinController.getFormSkin)
router.post("/create",skinController.createSkin)

module.exports= router