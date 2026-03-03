const express = require ("express");
const router = express.Router();
const fs = require ('fs');
const path = require ('path');


//CuartaRuta
router.get('/Lab10',(request,response,next) => {
    //We look for the html.index
    const filePath = path.join(__dirname, '..', 'public','index.html');
    response.sendFile(filePath);
});

//Quinta ruta o middleware
router.get('/Lab10/Lab6',(request, response, next) =>{
    const filePath = path.join(__dirname,'..','public','lab6.html');
    response.sendFile(filePath);
});


module.exports = router;