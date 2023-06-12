const express = require("express");
const bodyparser = require("body-parser")

const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const conversationRoute = require("./routes/conversations")
const messagesRoute = require("./routes/messages")
const multer =  require("multer")
const path = require("path")

const  app = express()

dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongodb")
//   } catch (error) {
//     throw error;
//   }
// }
const mongo ="mongodb+srv://taribiforyou:Taribi4YOU@cluster0.9x42rck.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try{
    await mongoose.connect(mongo);
    console.log("CONNECTED MONGO")
  } catch(error) {
    console.error(error)
  }

}
connect();




mongoose.connection.on("disconnected", ()=> {
  console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=> {
  console.log("mongoDB connected again")
})

app.use("/images", express.static(path.join(__dirname, "public/images")));

//MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/conversation", conversationRoute)
app.use("/api/messages", messagesRoute)


app.listen(8000, ()=>{
  console.log("connected to backend ")
})