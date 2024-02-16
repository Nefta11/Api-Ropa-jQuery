import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import ejs from "ejs";

const app = express();


// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Utiliza el enrutador de productos sin prefijo
app.use(clothesRouter);

export default app;