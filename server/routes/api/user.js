const express=require('express');
const router=express.Router();

//@ route get api/user/test
//@desc test user route
//@access public
router.get('/test',(req,res)=>res.json({msg:'user works'}));

//@ route get api/user/test
//@desc test user route
//@access public

module.exports=router