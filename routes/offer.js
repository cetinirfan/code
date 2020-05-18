const express = require('express');
const router = express.Router();
const Offer = require('../services/modals/Offer');
const moment = require('moment');
require('moment/locale/tr');
var multer  = require('multer')

router.get('/offer',(req,res)=>{
  Offer.find({},(err,find_offer)=>{
      if(err){
          return res.render('error.ejs');
      }
      res.render('offer.ejs',{
        find_offer,
          moment,
          title:'Tüm Teklifler' 
      })
  });
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads"); // here we specify the destination . in this case i specified the current directory
  },
  filename: function(req, file, cb) {
    console.log(file); 
    cb(null, file.originalname);// here we specify the file saving name . in this case i specified the original file name
  }
});

var uploadDisk = multer({ storage: storage });
router.get('/addOffer',(req,res) => {
  res.render('addOffer.ejs');
});

router.post('/addOffer',uploadDisk.single("image"), (req,res) => {
  const { title,descrption} = req.body;
  const newOffer = new Offer({
    offerPhoto:req.file.originalname,
    title:title,
    descrption:descrption,
  });
  newOffer.save ((err,find_offer) => {
      if(err){
          res.render('error.ejs');
      }
      return res.send("<script> alert('Teklif başarıyla eklendi'); window.location = '../../offer/offer/'; </script>");
  });
});

router.get('/deleteOffer/:_id',(req,res)=>{
    Offer.findByIdAndRemove({_id:req.params._id},(err,find_offer)=>{
        if(err){
            return res.render('error.ejs');
        }
        return res.send("<script> alert('Teklif Başarıyla Silindi'); window.location = '/offer/offer/'; </script>")
    });
});
module.exports = router;
