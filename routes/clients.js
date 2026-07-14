const router=require("express").Router();


router.get("/",(req,res)=>{

res.json([
{
company:"Example Healthcare",
status:"active"
}
]);

});


module.exports=router;
