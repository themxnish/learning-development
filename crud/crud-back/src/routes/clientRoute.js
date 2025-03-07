import express from 'express';
import * as clientController from '../admin/clientController.js';

const router = express.Router();

router.get('/clients', clientController.getClients); //view all clients
router.post('/clients', clientController.createClients); //create new client
router.put('/clients/:id', clientController.updateClients); //update client
router.delete('/clients/:id', clientController.deleteClients); //delete client
router.get('/clients/search', clientController.searchClients); //search client

export default router;