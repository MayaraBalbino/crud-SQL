import connection from '../database/db.js';
import { errorMessages } from '../errors/httpErrors.js';
import { messages } from '../errors/httpErrors.js';


export const createEmpresa = async (req, res) => {
    const { nomeDono, nomeEmpresa, emailEmpresa } = req.body;
    try {
        const [results] = await connection.query(
            'INSERT INTO empresa (nomeDono, nomeEmpresa, emailEmpresa) VALUES (?, ?, ?)',
            [nomeDono, nomeEmpresa, emailEmpresa]
        );
        res.status(messages.created.status).json({
            message: messages.created.message,
            empresa: {
                id: results.insertId,
                nomeDono,
                nomeEmpresa,
                emailEmpresa,
            },
        });
    } catch (error) {
        res.status(errorMessages.internalServerError.status).json({
            message: errorMessages.internalServerError.massage,
        });
    }
};
