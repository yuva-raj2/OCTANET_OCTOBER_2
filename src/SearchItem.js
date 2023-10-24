import React from "react"
const SearchItem=({search,setSearch})=>{
  return (
    <form className="searchitem" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" role="searchbox" placeholder="SearchItem" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem