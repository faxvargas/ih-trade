const express= require("express")
const router = express.Router()
const Skin = require("./../models/Skin")
const routeGuards = require("./middlewares/route-guard")
// router.get("/create",skinController.getFormSkin)
// router.post("/create",skinController.createSkin)

// module.exports= router

router.get("/skin", (req,res)=>{
    Skin.find({})
    .then((skins)=>{
        res.render("skin/list",{
            SkinList : skins
        })
    })
});

router.get("/skin/create",routeGuards.isLoggedIn,(req,res,next)=>{
    let juegos=["League of legends", "CS:GO", "Dota"]
    res.render("skin/createskin",{
        juegos : juegos
    })
});
router.post("/skin/create",(req,res,next)=>{
    const {nombreDelaSkin,descripcion,juegoAlQuePertenece,calidad,imagen} = req.body
    Skin.create({
        nombreDelaSkin,
        descripcion,
        juegoAlQuePertenece,
        calidad,
        imagen
    })
    .then((newSkin)=>{
        res.redirect("/skin")
    })
    .catch((e)=>console.log(e))
});

router.get("/skin/:id/edit",(req,res,next)=>{
    const {id} = req.params
    Skin.findById(id)
    .then((skin)=>{
    res.render("skin/update",skin)
    })
    .catch((e)=>{
        console.log(e)
    })
})

router.post("/skin/:id/edit",(req,res,next)=>{
    const {nombreDelaSkin,descripcion,juegoAlQuePertenece,calidad,imagen} = req.body
    const {id} = req.params
    Skin.findByIdAndUpdate(id,{
        nombreDelaSkin: nombreDelaSkin,
        descripcion : descripcion,
        juegoAlQuePertenece : juegoAlQuePertenece,
        calidad : calidad,
        imagen : imagen
    }) 
    .then((e)=>{
        res.redirect("/skin")
    })
    .catch((e)=>console.log(e))
})

router.post("/skin/:id/delete",(req,res,next)=>{
    const {id} = req.params
    Skin.findByIdAndDelete(id)
    .then(()=>{console.log("Se elimino la skin")
    res.redirect("/skin")
})
.catch((e)=>console.log(e))
})

module.exports= router