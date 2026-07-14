const router=require("express").Router();


router.post("/register",(req,res)=>{

const {name,email,password,role}=req.body;


res.json({
message:"User registered",
user:{
name,
email,
role
}
});

});


module.exports=router;
