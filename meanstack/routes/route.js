const express = require('express');

const router = express.Router();


const contact = require('../models/contact');

//retriving contacts

router.get('/contacts', (req, res, next)=>{
    contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contact
router.post('/contacts', (req,res, next)=>{
    //logic to add contact
    let newContact = new contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
            console.log(err);
        }
        else
        {
            res.json({msg: 'contact added successfully'});
        }
    })
});

//delte contacts
router.delete('/contacts/:id', (req,res, next)=>{
    //logic to delete contact
   
    contact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json( err);
        }
        else{
            res.json(result);
        }
    })
});



module.exports = router;