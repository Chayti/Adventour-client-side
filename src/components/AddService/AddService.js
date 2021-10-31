import React from "react";
import './AddService.css';
import useFirebase from "../../Hook/useFirebase";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = 'pending';
    console.log(data);
    axios.post('http://localhost:5000/addService', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully')
          reset()
        }
      })
  };
  return (
    <div>
      <h2 className="mt-5 text-center text-info fw-bold">Please Add Events</h2>
      <div className="login-box m-auto mt-3">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="m-2 p-2" placeholder="Service name" {...register("name", { required: true })} /><br />

              <input className="m-3 p-2" placeholder="Image URL" {...register("img")} />
              <br />

              <textarea className="m-3 p-2" placeholder="Description" {...register("description")} /><br />


              <button className="btn border-2 border-success bg-info rounded-pill">Add Service</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
