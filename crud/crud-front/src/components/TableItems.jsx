import axios from "axios";
import { useState } from "react";

export default function TableItems({tableData, setTableData, handleOpen, searchTerm }) {
    const [error, setError] = useState(null);

    const filteredData = tableData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.job.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this client?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`);
                setTableData((prevData) => prevData.filter((item) => item.id !== id));
            } catch (error) {
                setError("Error deleting client: " + error.message);
            }
        }
    };

    return (
        <>
            {error && <div className="alert alert-error">{error}</div>}
            <div className="overflow-x-auto mt-15">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Salary</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-base-300">
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.job}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <button className={`btn rounded-full w-22 ${item.isactive ? "btn-primary" : "btn-outline btn-primary"}`}>
                                        {item.isactive ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleOpen("edit", item)}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-accent"
                                        onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
