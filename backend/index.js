const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const expressSession = require('express-session')
const UserRounter = require("./rount/user")

// เชื่อม DB
mongoose.connect("mongodb+srv://admin:2319@cluster0.kdh9hcl.mongodb.net/system-reviewproduct");

// เรียกใช้ express
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(expressSession({
    secret: "node secret",
    resave: true, // บันทึก session ทุกครั้งที่มีการร้องขอ
    // saveUninitialized: true, // บันทึก session ทุกครั้งที่มีการร้องขอ โดยไม่คำนึงว่า session จะมีข้อมูลหรือไม่
  
}))
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

// เชื่อม rount
app.use("/auth", UserRounter)



// port ในการรัน server
app.listen(3001, () => {
    console.log("server is running")
})