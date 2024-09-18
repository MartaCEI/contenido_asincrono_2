import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js'
import mongoRoutes from './routes/mongodb.routes.js'
import { PORT, DOMAIN, URL } from './config/config.js'

const app = express();

// ----------------------------------
// Midlewares: Funciones que se ejecutan segun el orden que queremos 
// ----------------------------------

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use("/API/v1/", indexRoutes);
app.use("/API/v1/mongo", mongoRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: "No estoy funcionando",
        data: null,
        success:"ok",
        query: query,
        cant: 0
    })
})

// ----------------------------------
// Server
// ----------------------------------

// app.get("/")
app.listen(PORT, () => {
    console.log(`Server running on ${URL}`);
});