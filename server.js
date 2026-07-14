const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
 res.send("CareBridge API Running");
});


app.use("/api/users", require("./routes/users"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/jobs", require("./routes/jobs"));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`);
});
