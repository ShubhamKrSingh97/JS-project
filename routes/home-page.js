const express=require('express');
const router=express.Router();
const homePageController=require('../controllers/home-page');
router.get('/', homePageController);
module.exports=router;