import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div className="service py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <p className="px-3">{description}</p>
            <span className="bg-primary p-2 text-white">Status : Pending</span>
            <br />
            <Link to={`/service/${_id}`}>
                <button className="btn mx-3">Book Now</button>
            </Link>
        </div>
    );
}

export default Service;