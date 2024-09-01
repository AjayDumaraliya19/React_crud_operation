import React, { useEffect, useState } from "react";
import "./App.css";
import { user_data } from "./data";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(user_data);
  }, []);

  const handledEdit = (id) => {
    const editData = data.filter(item => item.id === id);
    if (editData !== undefined) {
      setIsUpdate(true);
      setId(editData[0].id);
      setFirstName(editData[0].f_name);
      setSurname(editData[0].surname);
    }
  }

  const handledDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item..!")) {
        const remainData = data.filter(item => item.id !== id);
        setData(remainData);
      }
    }
  }

  const handledSubmit = (e) => {
    e.preventDefault();

    const dt = [...data];
    const newObject = {
      id: dt.length + 1,
      f_name: firstName,
      surname: surname
    }

    dt.push(newObject);
    setData(dt);
    handleClear();
  }

  const handledUpdate = () => {
    const index = data.map(item => {
      return item.id
    }).indexOf(id);

    const dt = [...data];
    dt[index].f_name = firstName;
    dt[index].surname = surname;

    setData(dt);
    handleClear();
  }

  const handleClear = () => {
    setIsUpdate(false);
    setId(0);
    setFirstName("");
    setSurname("");
  }

  return (
    <>
      <div className="flex max-w-5xl mx-auto gap-10 px-5 py-10">
        {/* <div className="relative z-0 w-full group">
          <input
            type="number"
            name="floating_id"
            id="floating_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => { setId(e.target.value) }}
            value={id}
            required />
          <label
            for="floating_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Id</label>
        </div> */}

        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="floating_fname"
            id="floating_fname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}
            required />
          <label
            for="floating_fname"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="floating_surname"
            id="floating_surname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            required />
          <label for="floating_surname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Surname</label>
        </div>

        <div className="flex gap-4">
          {
            !isUpdate ?
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handledSubmit(e)}>
                Submit
              </button>
              :
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => handledUpdate()}>
                Update
              </button>
          }

          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => { handleClear() }}>
            Clear
          </button>
        </div>
      </div >

      <div className="relative max-w-5xl mx-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sr. No</th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Surname</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                  <td className="px-6 py-4">{item.f_name}</td>
                  <td className="px-6 py-4">{item.surname}</td>
                  <td className="px-6 py-4 flex gap-5">
                    <div>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handledEdit(item.id)}>
                        Edit
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handledDelete(item.id)}>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
