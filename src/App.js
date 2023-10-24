import './App.css';
import { useState,useEffect } from 'react';
import Todo from './Todo';
import Home from './Home';
import Footer from './Footer';
import Additem from './Additem';
import SearchItem from './SearchItem';
function App() {
  const [items,setItems]=useState([]);
  const [newItem,setNewitems]=useState('');
  const [search,setSearch]=useState('');
  useEffect(()=>{
    JSON.parse(localStorage.getItem('todo_list'))
  },[])
const addItem=(item)=>{
  const id=items.length?items[items.length-1].id+1:1;
  const addNewItem={id,checked:false,item};
  const listItems=[...items,addNewItem];
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleOnCheck=(id)=>{
    const listItems=items.map((item)=>(item.id===id)?{...item,checked:!item.checked}:item);
    setItems(listItems);
    localStorage.setItem("To-do",JSON.stringify(listItems));
}
const handleOndelete=(id)=>{
  const listItems=items.filter((item)=>item.id!==id)
  setItems(listItems)
  localStorage.setItem("to-do",JSON.stringify(listItems));
}
const handlesubmit=(e)=>{
  e.preventDefault()
  if(!newItem)
  return;
  console.log(newItem);
  addItem(newItem)
  setNewitems('');
}
  return (
    <div className="App">
      <Home/>
      <Additem newItem={newItem} setNewitems={setNewitems} handlesubmit={handlesubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
      <Todo items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} handleOnCheck={handleOnCheck} handleOndelete={handleOndelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
