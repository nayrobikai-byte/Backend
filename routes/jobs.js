const router=require("express").Router();


router.get("/",(req,res)=>{

res.json([
{
title:"Medical Assistant",
location:"Remote",
pay:"$25/hr"
}
]);

});


module.exports=router;
