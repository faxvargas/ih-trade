const express           = require("express")
const router            = express.Router()
const Post = require("./../models/post")

// const postController    = require("./../controllers/postController")


// // GET - Mostrar un formulario para crear una nueva publicación
// // http://localhost: 3000/posts/create
// router.get("/create", postController.createPost)


// // POST - Enviar datos de formulario a la base de datos y crear una publicación
// // http://localhost: 3000/posts/create
// router.post("/create", postController.createPostForm)


// // GET - Listar todas las publicaciones de base de datos
// // http://localhost:3000/posts
// router.get("/", postController.listPosts)

router.get("/post",(req,res)=>{
    Post.find({})
    .then((post)=>{
        res.render("post/list",{
            PostList : post
        })
    })
})

router.get("/post/create", (req,res,next)=>{
    res.render("post/createpost")
    })

router.post("/post/create",(req,res,next)=>{
    const {nombreDelProducto,descripcion,NumeroTelefonico,razonDeVenta,cantidad,fechaDePublicacion} = req.body
    Post.create({
        nombreDelProducto,
        descripcion,
        NumeroTelefonico,
        razonDeVenta,
        cantidad,
        fechaDePublicacion
    })
    .then((newPost)=>{
        res.redirect("/post")
    })
    .catch((e)=>console.log(e))
})

router.get("/post/:id/edit",(req,res,next)=>{
    const {id} = req.params
    Post.findById(id)
    .then((post)=>{
        res.render("post/update", post)
    })
    .catch((e)=>{
        console.log(e)
    })
})

router.post("/post/:id/edit",(req,res,next)=>{
    const {nombreDelProducto,
        descripcion,
        NumeroTelefonico,
        razonDeVenta,
        cantidad,
        fechaDePublicacion} = req.body
        const {id} = req.params
        Post.findByIdAndUpdate(id,{
            nombreDelProducto : nombreDelProducto,
        descripcion : descripcion,
        NumeroTelefonico : NumeroTelefonico,
        razonDeVenta : razonDeVenta,
        cantidad : cantidad,
        fechaDePublicacion : fechaDePublicacion
        })
        .then((e)=>{
            res.redirect("/post")
        })
        .catch((e)=>console.log(e))
})

router.post("/post/:id/delete",(req,res,next)=>{
    const {id} = req.params
    Post.findByIdAndDelete(id)
    .then(()=>console.log("Se elimino la publicacion"))
    res.redirect("/post")
})




module.exports = router