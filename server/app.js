import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import catalogoPeliculasRoutes from './routes/catalogoPeliculas.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors(
    {
        origin: 'http://localhost:5173', //'https://fronted-production-43ca.up.railway.app'
        credentials: true
    }
))
app.use('/api', catalogoPeliculasRoutes);
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

export default app;