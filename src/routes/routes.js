const expres =require("express");
const router = expres.Router();
const whatscontroller = require("../controllers/whatcontroller");

router
.get("/",whatscontroller.VerifiToken)
.post("/",whatscontroller.RecibeMensaje)

module.exports = router;
