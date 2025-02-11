//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.port || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed !! ", err);
})









// import express from "express";
// const app = express();

// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Application is not able to connect to DB");
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.error("Error ", error);
//     throw err;
//   }
// })(); // front semicolon used to take care of old semicolon if thta is not there it will create problem
