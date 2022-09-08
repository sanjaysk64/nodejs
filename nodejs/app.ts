import * as express from "express"
let app:any =express.Router();
app.get("/connect",(req:any,res:any):any=>
{
res.status(200).json({"message":"hello from js"});
});
app.listen(8080 ,()=>{
    console.log("server started sucessfully");
})