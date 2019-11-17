const express = require('express');
const router = express.Router();
const {Enseignant} = require('../models/Enseignant.model');

router.get('/',(req,res,next)=>{
    Enseignant.find(req.query)
        .then(data => {
            res.status(200).json({data : data})
        }).catch(err => {
            res.status(400).json({msg : err.message})
        });
});
router.post('/add',(req,res,next)=> {
    if(req.body != undefined) {
        const ens = new Enseignant(req.body);
        ens.save()
        .then(data => res.status(200).json({data : data}))
        .catch(err => res.status(400).json({msg : err.message}));
    }else {
        res.status(400).send("Some thing went wrong ")
    }
})

module.exports = router;