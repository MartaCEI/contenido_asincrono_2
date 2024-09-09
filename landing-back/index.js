import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js'
import { PORT, DOMAIN } from './config/config.js'

const app = express();

// ----------------------------------
// Midlewares
// ----------------------------------

app.use(cors());

app.use(express.json());

app.use("/API/v1/", indexRoutes);

app.use(express.static('public'));

// ----------------------------------
// Server
// ----------------------------------

app.listen(PORT, () => {
    console.log(`Server running on ${DOMAIN}:${PORT}`);
});