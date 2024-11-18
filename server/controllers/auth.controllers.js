import User from '../models/user.model.js';
/* import { createAssessToken } from '../libs/jwt.js'; */
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const user = await Auth.findOne({ userName });

        if (!user) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

/*         const token = createAssessToken({ id: user._id });
        res.cookie("token", token) */

        return res.status(200).json();

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
 

export const logout = async (req, res) => {
    return res.status(200).json({ mensaje: 'Logout exitoso' });
}

export const profile = async (req, res) => {
    res.json({ mensaje: 'Profile' });
}