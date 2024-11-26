import connection from '../database/db.js';
import { errorMessages } from '../errors/httpErrors.js';


export const getEmpresa = async (req, res) => {
    try {
        const [results] = await connection.query('SELECT * FROM empresa');
        res.json(results);
    } catch (error) {
        res.status(errorMessages.internalServerError.status).json({
            message: errorMessages.internalServerError.massage,
        });
}}
