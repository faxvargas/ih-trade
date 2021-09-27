const isLoggedIn = (req,res,next)=>{
    // en caso no estes logeado te redireccionará
    if(!req.session.currentUser){
        return res.redirect("/auth/login")
    }
    next()
}

const isLoggedOut = (req,res,next)=>{
    if(req.session.currentUser){
        return res.redirect("/")
    }
    next()
}

module.exports={
    isLoggedIn,
    isLoggedOut
}