const express = require('express');
const router = express.Router();
const Help = require('../services/modals/Help');
const moment = require('moment');
require('moment/locale/tr');

router.get('/help',(req,res)=>{
    Help.find({},(err,find_help)=>{
        if(err){
            return res.render('error.ejs');
        }
        res.render('help.ejs',{
            find_help,
            moment, 
            title:'Tüm Yardım Talepleri'          
        })
    });

});

router.get('/confirmHelp',(req,res)=>{
    Help.find({status:1},(err,find_help)=>{
        if(err){
            return res.render('error.ejs');
        }
        res.render('confirmHelp.ejs',{
            find_help,
            moment, 
            title:'Onaylanan Yardım Talepleri'          
        })
    });

});

router.get('/pendingHelp',(req,res)=>{
    Help.find({status:0},(err,find_help)=>{
        if(err){
            return res.render('error.ejs');
        }
        res.render('pendingHelp.ejs',{
            find_help,
            moment, 
            title:'Onay Bekleyen Yardım Talepleri'          
        })
    });

});

router.get('/deleteHelp/:_id',(req,res)=>{
    Help.findByIdAndRemove({_id:req.params._id},(err,find_help)=>{
        if(err){
            return res.render('error.ejs');
        }
        return res.send("<script> alert('Yardım Talebi Başarıyla Silindi'); window.location = '/help/help/'; </script>")
    });
});

router.get('/validationHelp/:id',(req,res)=>{
    Help.findOneAndUpdate({_id:req.params.id},{$set:{status:1}},(err,find_help)=>{
            if(err){
                return res.render('error.ejs');
            }
            return res.send("<script> alert('Yardım Talebi Başarıyla onaylandı.'); window.location = '../../help/confirmHelp'; </script>")
        });
});


module.exports = router;