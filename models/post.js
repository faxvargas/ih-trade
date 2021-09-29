const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    vendedor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    nombreDelProducto: String,
    descripcion:String,
    NumeroTelefonico:Number, //hay muchas estafas, esto puede prevenir eso.
    PorQueLoVende:String,
    cantidad:Number
})

const Post = mongoose.model("Post", postSchema)

module.exports= Post