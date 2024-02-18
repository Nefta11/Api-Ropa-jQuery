import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import ejs from "ejs";
import clothesRouter from './routes/clothes.routes.js'
const app = express();


// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('css')); // Reemplaza 'public' con tu carpeta de archivos estáticos


app.use(clothesRouter);

export default app;