import React from "react";
import { Link } from "react-router-dom";
import './MyBooking.css';

const MyBooking = (props) => {
    const { _id, name, description, img } = props.service;
    return (
        <div className="my-service py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <p className="px-3">{description}</p>
            <span className="bg-primary p-2 text-white">Status : Pending</span>
            <br />
            <Link to={`/service/${_id}`}>
                <button className="btn mx-3 mb-1">Book Now</button>
            </Link>
            <br />
            <button className="btn delete-btn mx-3 mt-0" onClick={() => props.handleDelete(_id)}>Delete</button>
        </div>
    );
}

export default MyBooking;