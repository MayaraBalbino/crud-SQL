import connection from '../database/db.js';
import { errorMessages } from '../errors/httpErrors.js';
import { messages } from '../errors/httpErrors.js';


export const updateEmpresa = async (req, res) => {
    const { id } = req.params;
    const { nomeDono, nomeEmpresa, emailEmpresa } = req.body;
    try {
        const [results] = await connection.query(
            'UPDATE empresa SET nomeDono = ?, nomeEmpresa = ?, emailEmpresa = ? WHERE id = ?',
            [nomeDono, nomeEmpresa, emailEmpresa, id]
        );
        res.status(messages.updated.status).json({
            message: messages.updated.message,
            empresa: {
                id,
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
