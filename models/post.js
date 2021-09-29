const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    vendedor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    nombreDelProducto: String,
    descripcion:String,
    NumeroTelefonico:String, //hay muchas estafas, esto puede prevenir eso.
    razonDeVenta:String,
    cantidad:Number,
    fechaDePublicacion:Date
})

const Post = mongoose.model("Post", postSchema)

module.exports= Post