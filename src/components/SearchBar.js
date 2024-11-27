import { useState } from 'react';
import "./SearchBar.css";
function SearchBar({onSubmit}) {
    const [query,setQuery] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Seach Term</label>
                <input value={query} onChange={(e)=>setQuery(e.target.value)}></input>
            </form>
        </div>
    )
}
export default SearchBar;