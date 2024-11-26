import connection from '../database/db.js';
import { errorMessages } from '../errors/httpErrors.js';
import { messages } from '../errors/httpErrors.js';


export const deleteEmpresa = async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await connection.query(
            'DELETE FROM empresa WHERE id = ?',
            [id]
        );
        res.json({
            message: messages.deleted.message,
        });
    } catch (error) {
        res.status(errorMessages.internalServerError.status).json({
            message: errorMessages.internalServerError.massage,
        });
    }
};
