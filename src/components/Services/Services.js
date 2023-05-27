import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://adventour-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            });
    }, [])

    return (
        <div id="services">
            <h1 className="mt-5">Our Packages</h1>
            {loading && <Spinner animation="border" variant="secondary" />}
            <div className="service-container">
                <Row xs={1} md={3}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
}

export default Services;