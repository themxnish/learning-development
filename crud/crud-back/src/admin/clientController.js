import * as clientServices from '../services/clientServices.js';

export const getClients = async (req, res) => {
    try {
        const clients = await clientServices.getClients();
        res.status(200).json(clients);
    } catch (error) {
        console.log("error fetching clients" , error);
        res.status(500).json({ message: 'server error' });
    }
}

export const createClients = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientServices.createClients(clientData);
        res.status(200).json(newClient);
    } catch (error) {
        console.log("error adding clients" , error);
        res.status(500).json({ message: 'server error' });
    }
}

export const updateClients = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientServices.updateClients(clientId, clientData);
        if (!updatedClient) {
            return res.status(404).json({ message: 'client not found' });
        }
        res.status(200).json(updatedClient);
    } catch (error) {
        console.log("error updating clients" , error);
        res.status(500).json({ message: 'server error' });
    }
}

export const deleteClients = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedClient = await clientServices.deleteClients(clientId);
        if (!deletedClient) {
            return res.status(404).json({ message: 'client not found' });
        }
        res.status(200).json({ message: 'client deleted successfully' });
    } catch (error) {
        console.log("error deleting clients", error);
        res.status(500).json({ message: 'server error' });
    }
}

export const searchClients = async (req, res) => {
    try{
        const searchTerm = req.query.q;
        const clients = await clientServices.searchClients(searchTerm);
        res.status(200).json(clients);
    } catch (error) {
        console.log("error searching clients", error);
        res.status(500).json({ message: 'server error' });
    }
}