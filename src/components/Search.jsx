import React from 'react'

const Search = ({value, onChange}) => {
    return (
        <div className="flex justify-center items-center">
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white my-7 p-2 border border-slate-300 rounded-[10px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search..." 
              type="text" 
              name="search"
              value={value} 
              onChange={onChange} 
            />
        </div>
    )
}

export default Search
