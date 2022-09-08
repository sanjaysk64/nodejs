import *as express from"express"
import transactions from "./transactions";
import account from "./account";
import { listen } from "express/lib/application";
let app =express();
app.use("/module1",transactions);
app.use("/module2",account);
app.listen(8080,()=>{
console.log("server started sucesfully");
});

//http://localhost:8080/module1/trans
//http://localhost:8080/module2/acc