import React from "react"
import {FaTrash} from "react-icons/fa";
const  ItemList=({items,handleOnCheck,handleOndelete})=>{
  return (
    <ul>
        {items.map(item=>(
            <li key={item.id}>
                <input type="checkbox" checked={item.checked} className="check" onChange={()=>handleOnCheck(item.id)}/>
                <label style={(item.checked)?{textDecoration:"line-through"}:{textDecoration:"unset"}} onDoubleClick={()=>handleOnCheck(item.id)}>{item.item}</label>
                <FaTrash role='button' className="button" tabIndex="0" aria-label={`Delete ${item.item}`} onClick={()=>handleOndelete(item.id)}/>
            </li>
        ))}
    </ul>
  )
}

export default ItemList