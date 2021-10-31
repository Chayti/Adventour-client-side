import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import './ManageServices.css'

const ManageServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services])

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`
    const ans = window.confirm('Do you want to delete it?')
    if (ans) {
      axios
        .delete(url)
        .then(data => {
          console.log(data)
          if (data.acknowledged) {
            alert('Deleted')
            const remaining = services.filter(service => service._id !== id)
            setServices(remaining)
          }
        })
    }
  }
  return (
    <div>
      <h2 className="fw-bold mt-3 text-success">--Manage Services--</h2>
      {
        services.map(service => <div key={service._id}>

          <div className="bg-info d-flex justify-content-between m-4 px-4 py-3 border-2 border-primary rounded-pill w-75 mx-auto">
            <h5 className="fw-bold text" style={{ display: "inline" }}>{service.name}</h5>
            <div>
              <button className="bg-info border-0" onClick={() => handleDelete(service._id)}><FontAwesomeIcon className="delete-btn text-danger" icon={faTrash} /></button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default ManageServices;
