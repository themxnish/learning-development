import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import TableItems from './components/TableItems'
import Modal from './components/Modal'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/clients");
            setTableData(response.data);
        } catch (error) {
            setError(error.message);
        }
    };
    fetchData();
  }, []);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setModalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add'){
      try{
        const response = await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log("client added :",response.data);
        setTableData((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.log("error adding client", error);
      }
    }else {
    console.log('Updating client with ID:', clientData.id); 
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
        console.log('Client updated:', response.data);
        setTableData((prevData) => prevData.map((client) => (client.id === clientData.id ? response.data : client)));
        } catch (error) {
        console.error('Error updating client:', error); 
      }
  }
  }

  return (
    <>
      <NavBar onOpen = {() => handleOpen('add')} onSearch = {setSearchTerm}/>
      <TableItems tableData = {tableData} setTableData = {setTableData} handleOpen={handleOpen} searchTerm = {searchTerm}/>
      <Modal 
        isOpen = {isOpen} 
        onSubmit = {handleSubmit} 
        onClose = {() => setIsOpen(false)} 
        mode = {modalMode} clientData = {clientData}/>
      
    </>
  )
}

export default App
