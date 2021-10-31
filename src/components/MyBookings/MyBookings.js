import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useFirebase from "../../Hook/useFirebase";
import MyBooking from "../MyBooking/MyBooking";
import './MyBookings.css';

const MyBookings = () => {
    const { user } = useFirebase();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myServices/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [user.email, services]);

    const handleDelete = (id) => {
        console.log(id)
        const url = `http://localhost:5000/services/${id}`
        const ans = window.confirm('Do you want to delete it?')
        if (ans) {
            axios
                .delete(url)
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining)
                    }
                })
        }
    }
    return (
        <div id="my-services">
            <h1 className="mt-5">My Bookings</h1>
            <div className="my-service-container">
                <Row xs={1} md={3}>
                    {
                        services.map(service => <MyBooking
                            key={service.id}
                            service={service}
                            handleDelete={handleDelete}
                        ></MyBooking>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default MyBookings;