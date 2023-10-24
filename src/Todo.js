import React from 'react'
import ItemList from './ItemList';
const Todo=({items,handleOnCheck,handleOndelete})=>{
  return (
    <main className='Todo' id={items}>
    {(items.length)?(
 <ItemList items={items} key={items.id} handleOnCheck={handleOnCheck} handleOndelete={handleOndelete}/>
      ):(
        <p>Your list is empty.</p>
      )
      }
    </main>
  )
}

export default Todo
