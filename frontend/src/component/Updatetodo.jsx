// src/pages/UpdateItem.jsx
import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Updatetodo = () => {
    let  navigation =useNavigate()


  let [data, setData] = useState({
    item: ''
 
})
let { item } = data

function handleChange(e) {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
}
async function handleSubmit(e) {
    e.preventDefault()

    await axios.put(`http://localhost:4200/api/updatetodo/${id}`,data)
    navigation('/')
    setData(result.data[0])
}

  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-semibold">Update Item</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="item"
            value={item}  
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md w-full"
            required
          />
        </div>
       
        <button type="submit" className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700">Update Item</button>
      </form>
    </div>
  );
};

export default Updatetodo;
