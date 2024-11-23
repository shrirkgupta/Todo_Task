import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  let [data, setData] = useState([]);

  async function gettodoData() {
    try {
      let result = await axios.get('http://localhost:4200/api/gettodo');
      setData(result.data.data);
      console.log(result)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    gettodoData();
  }, []);


  async function deletetodo(id) {
    let flag = confirm('you are sure data delete ')
    if (flag) {
      await axios.delete(`http://localhost:4200/api/deletetodo/${id}`)
      gettodoData()
    }
  }

  return (
    <>
      <div className="ml-64 p-6">


        <Link to="/Additem">
          <button className="mt-4 mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Add New Item
          </button>
        </Link>

        {/* Table with Action Buttons */}
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">item</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Action</th>

            </tr>
          </thead>
          <tbody>
            {data.map((rishabh, key) => (

              <tr key={key}
                className="border-b hover:bg-gray-50">
                <td className="px-6 py-3 text-sm font-medium text-gray-700">{rishabh._id}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{rishabh.item}</td>

                <td className="px-6 py-3 text-sm text-gray-700">

                  <button onClick={() => deletetodo(rishabh._id)} className="btn-delete">
                    Delete
                  </button>
                  <Link to="/Updatetodo">
                  <button  className="btn-edit">
                    EDIT
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
