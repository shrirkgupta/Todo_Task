// src/pages/AddItem.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Additem = () => {

    let navigation = useNavigate()

  
  let [data, setData] = useState({
    item: ''
 
})
let { item } = data


function handleChange(e){
    e.preventDefault()
    setData({...data, [e.target.name]: e.target.value})
}

 async function handleSubmit(e){
    e.preventDefault()

    await axios.post('http://localhost:4200/api/createtodo',data)
    navigation('/')

 }

  return (
    <div className="ml-64 p-6">
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="upper-add">New Item Save</label>
          <input type="text" id="name" name="item"  value={item} onChange={handleChange} className="mt-1 px-4 py-2 border rounded-md w-full" required />
        </div>
       
        <button type="submit" className="btn-add">Add Item</button>
      </form>
    </div>
  );
};

export default Additem;
