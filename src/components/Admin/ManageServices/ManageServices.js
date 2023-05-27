import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import './ManageServices.css'

const ManageServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://adventour-server-side.vercel.app/booking')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services])

  const handleApprove = data => {
    // console.log(data)
    data.status = "approved";
    if (data.email) {
      fetch(`https://adventour-server-side.vercel.app/booking/${data._id}`, {
        method: "PUT",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(data => {
        alert("Approved your package")
        console.log(data);
      })
    }
  }

  const handleDelete = (id) => {
    const url = `https://adventour-server-side.vercel.app/booking/${id}`
    console.log(`https://adventour-server-side.vercel.app/booking/${id}`)
    const ans = window.confirm('Do you want to delete it?')
    if (ans) {
      axios
        .delete(url)
        .then(data => {
          // console.log(data)
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
            <div className="d-md-flex">
              <div className="fw-bold" style={{ color: "brown", textDecoration: "underline" }}>
                <p>{service.status}</p>
              </div>
              <div>
                &emsp;<button className="btn-success border-0" onClick={() => handleApprove(service)}>Update Status</button>&emsp;
              </div>
              <div>
                <button className="bg-info border-0" onClick={() => handleDelete(service._id)}><FontAwesomeIcon className="delete-btn text-danger" icon={faTrash} /></button>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default ManageServices;
