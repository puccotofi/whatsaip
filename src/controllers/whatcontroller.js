const VerifiToken=(req,res)=>{
    res.send("hola Verifitoken");
}

const RecibeMensaje=(req,res)=>{
    res.send("hola RecibeMensaje");
}

module.exports = {
    VerifiToken,
    RecibeMensaje
}