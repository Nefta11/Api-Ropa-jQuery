import app from "./app.js";
import database from "./database.js";

const port= process.env.PORT;

app.listen(port,()=>{
console.log("server on port"+port);
});
