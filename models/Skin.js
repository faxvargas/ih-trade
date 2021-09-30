const mongoose = require("mongoose")

const SkinSchema = mongoose.Schema({
    nombreDelaSkin: String,
    descripcion:String,
    juegoAlQuePertenece:String, //hay muchas estafas, esto puede prevenir eso.
    calidad:Number,
    imagen: String
    
})

const Skin = mongoose.model("Skin", SkinSchema)

module.exports= Skin