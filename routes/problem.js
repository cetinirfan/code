const express = require('express');
const router = express.Router();
const Problem = require('../services/modals/Problem');
const moment = require('moment');
require('moment/locale/tr');

router.get('/problem',(req,res)=>{
    Problem.find({type:0},(err,find_problem)=>{
        if(err){
            return res.render('error.ejs');
        }
        res.render('problem.ejs',{
            find_problem,
            moment, 
            title:'Çözüm Bekleyen Sorunlar'          
        })
    });

});

router.get('/fixedProblem',(req,res)=>{
    Problem.find({type:1},(err,find_problem)=>{
        if(err){
            return res.render('error.ejs');
        }
        res.render('fixedProblem.ejs',{
            find_problem,
            moment, 
            title:'Çözüm Bekleyen Sorunlar'          
        })
    });

});

router.get('/deleteProblem/:_id',(req,res)=>{
    Problem.findByIdAndRemove({_id:req.params._id},(err,find_problem)=>{
        if(err){
            return res.render('error.ejs');
        }
        return res.send("<script> alert('Sorun Başarıyla Silindi'); window.location = '/problem/problem/'; </script>")
    });
});

router.get('/solveProblem/:id',(req,res)=>{
    Problem.findOneAndUpdate({_id:req.params.id},{$set:{type:1}},(err,find_problem)=>{
            if(err){
                return res.render('error.ejs');
            }
            return res.send("<script> alert('Sorun Başarıyla çözüldü.'); window.location = '../../problem/fixedProblem'; </script>")
        });
});


module.exports = router;