export default function NavBar({onOpen, onSearch}){
    const handleSearch = (event) => {
        onSearch(event.target.value);
    }
    
    return (
        <>
        <div className="navbar bg-base-100 p-4">
        <div className="navbar-start flex flex-col items-start">
            <a className="btn btn-ghost text-2xl mt-2 font-bold font-sans">CRUD app</a>
            <small className="text-sm ml-4 mt-2">create read update delete</small>
        </div>
        <div className="navbar-center">
            <div className="form-control">
                <input type="text" placeholder="Search" onChange={handleSearch} className="input input-bordered w-48 md:w-auto"/>
            </div>
        </div>
        <div className="navbar-end">
            <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
        </div>
        </div>
        </>
    );
}