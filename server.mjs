// Importuojame express'ą
import express from "express";
import usersRouter from './routes/index.mjs';

import cookies from './middleware/cookies.mjs'

import { connectDB } from "./db/postgresConnection.mjs";


// Serverio registravimas
const app = express();


const startServer = async () => {
    try {
       const message = await connectDB()
       console.log(message);
app.use("/api/v1/restaurant", usersRouter);

// Serverio indentifikavimas
const PORT = 3000;

app.use(cookies)

// Konvertuojame tekstinį failą į jsoną
app.use(express.json());
// Aplikacijos paleidimas
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
  });

    } catch (error) {
        console.error('Failed to connect to the server or database', error);

    }
}

startServer()