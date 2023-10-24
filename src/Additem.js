import React from "react"
import {FaPlus} from 'react-icons/fa'
import { useRef } from "react"
const Additem=({newItem,setNewitems,handlesubmit})=>{
const inputref=useRef()
  return (
    <form className="addForm" onSubmit={handlesubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" ref={inputref} autoFocus id="addItem" placeholder="Add Item" value={newItem} onChange={(e)=>setNewitems(e.target.value)}required/>
        <button type="submit" aria-label="Add Item" onClick={()=>inputref.current.focus()}><FaPlus/></button>
    </form>
  )
}

export default Additem