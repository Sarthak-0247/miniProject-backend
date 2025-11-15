import app from "./app.js";
import "dotenv/config.js";

const port = process.env.PORT || 8000;

app.listen(port , ()=>{
    console.log("Server is listing on port " , port);
});