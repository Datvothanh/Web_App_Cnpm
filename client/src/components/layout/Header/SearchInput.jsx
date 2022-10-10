import { Search } from '../../Icons';
import { useState, useEffect, useRef } from 'react';
import './header.module.scss';
function SearchInput(props) {
    const inputRef = useRef();
    
    const hanleClickSearch = (e) => {
        e.preventDefault();
        
    };

    
 
    return (
        <div className="">
            <label
                htmlFor="default-search"
                className=""
            >
                Search
            </label>
            <form className="" onSubmit={hanleClickSearch}>
                <div className="">
                    <Search ref={inputRef}/>
                </div>
                
                <button
                    type="submit"
                    className=""
                    // onClick={hanleClickSearch}
                >
                    Tìm kiếm
                </button>
            </form>
        </div>
    );
}

export default SearchInput;
