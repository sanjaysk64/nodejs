import *as express from"express"

let account:any =express.Router();
account.get("/acc",(req:any,res:any):any=>{
res.status(200).json({"message":"account sucess"})
});
 export default account;

  