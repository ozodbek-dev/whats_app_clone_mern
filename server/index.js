import 'colors'
import './config/loadDotenv.js'
import express from 'express'
import connectToServer from "./config/connectToServer.js";
import cors from 'cors'
import connectToDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(cors())
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))


// routes
app.use("/api/user", userRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/message", messageRoutes);


//connection to db;
connectToDB()

const PORT = process.env.PORT;

connectToServer(app, PORT);