import { query } from "../database.js";

export const getClients = async () => {
    const { rows } = await query("SELECT * FROM public.clients");
    return rows;
}

export const createClients = async (clientData) => {
    const { name, email, job, salary, isactive } = clientData;
    const { rows } = await query(
        `INSERT INTO public.clients (name, email, job, salary, isactive) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
        [name, email, job, salary, isactive]
        );
    return rows[0];
}

export const updateClients = async (clientId, clientData) => {
    const { name, email, job, salary, isactive } = clientData;
    const { rows } = await query(
            `UPDATE public.clients SET name = $1, email = $2, job = $3, salary = $4, isactive = $5 
            WHERE id = $6 RETURNING *`, 
            [name, email, job, salary, isactive, clientId]
        );
    return rows[0];
}

export const deleteClients = async (clientId) => {
    const { rowCount } = await query(
            `DELETE FROM public.clients WHERE id = $1`, 
            [clientId]
        );
    return rowCount > 0;
}

export const searchClients = async (searchTerm) => {
    const { rows } = await query(
            `SELECT * FROM public.clients WHERE name ILIKE $1 or email ILIKE $1 or job ILIKE $1 or job ILIKE $1`, 
            [`%${searchTerm}%`]
        );
    return rows;
}