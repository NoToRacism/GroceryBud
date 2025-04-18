import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   }
//   else {
//     list = []
//   }
//   return list;
// }

//using the local browser Storage for storing our list
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  const [items, setItems] = useState(defaultList)

  // adding a new Item
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the List')
  }
  
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item Deleted from the List')
    
  }


  const editItem = (itemid) => {
    const newItems = items.map((item) => {
      if (item.id === itemid) {
        const newItem = { ...item, completed: !item.completed }
        return newItem;

      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return <section className="section-center">
    <ToastContainer />
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem} />

  </section>;
};

export default App;
