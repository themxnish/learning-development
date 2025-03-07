import { useEffect, useState } from 'react'
export default function Modal({ isOpen, onClose, mode, onSubmit, clientData }) {
    const [salary, setSalary] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (event) => {
        const newStatus = event.target.value === 'active';
        console.log("selected status:", newStatus);
        setStatus(newStatus);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const clientData = { name, email, job, salary: Number(salary), isactive: status };
            await onSubmit(clientData);
        } catch (error) {
            console.log(error);
        }
        onClose();
    }

    useEffect(() => {
        if(mode === 'edit' && clientData){
            setName(clientData.name);
            setEmail(clientData.email);
            setJob(clientData.job);
            setSalary(clientData.salary);
            setStatus(clientData.isActive);
        } else {
            setName('');
            setEmail('');
            setJob('');
            setSalary('');
            setStatus(false);
        }
    }, [mode, clientData]);

    return (
        <>
        <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4">
                    {mode === 'edit' ? 'Edit Client' : 'Client Details'}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col" required>
                    <label className="input input-bordered flex items-center w-full gap-2 my-2">
                        Name : <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </label>

                    <label className="input input-bordered flex items-center w-full gap-2 my-2">
                        Email : <input type="email" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" />
                    </label>

                    <label className="input input-bordered flex items-center w-full gap-2 my-2">
                        Job : <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}  placeholder="Enter job type" />
                    </label>

                    <div className="flex mb-4 justify-between">
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            Salary : <input type="number" className="grow" value={salary} onChange={(e) => setSalary(e.target.value)}  placeholder="Enter salary" />
                        </label>
                        <select className='select select-bordered w-full max-w-xs my-2 ml-4' onChange={handleStatusChange} value={status ? 'active' : 'inactive'}>
                            <option disabled selected>Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    {/* Close button */}
                    <button type="button"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-success w-35 mt-4">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                </form>
            </div>
        </dialog>
        </>
    );
}
