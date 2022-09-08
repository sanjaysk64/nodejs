import* as express from "express"
import req from "express/lib/request";
let transaction:any= express.Router(); // sub module
//we need to export -export default 

transaction.get("/trans",(req:any,res:any):any=>{
res.status(200).json({"message":"transactions sucess"})
});

export default  transaction;