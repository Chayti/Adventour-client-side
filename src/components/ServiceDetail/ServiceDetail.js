import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faNotesMedical, faHandHoldingUsd, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup } from "react-bootstrap";
import useFirebase from "../../Hook/useFirebase";
import { useForm } from "react-hook-form";

const ServiceDetail = () => {

    const { user } = useFirebase();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://spooky-skull-68797.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(`https://spooky-skull-68797.herokuapp.com/services/${serviceId}`)
                setService(data)
            }
            );
    }, [serviceId])
    console.log(serviceId)

    const onSubmit = data => {
        data.serviceId = serviceId
        data.name = service.name
        data.img = service.img
        data.description = service.description
        data.status = 'pending'
        fetch('https://spooky-skull-68797.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your booking processed Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="service-banner d-flex align-items-center justify-content-center ">
                <div className="front-bg mb-5">

                    <h1>Welcome to {service.name}</h1>

                    <h2>Join us!! Be happy with us!!! Enjoy the whole world!!!</h2>
                    <br /><br />
                    <button className="btn py-3 px-5 fs-4">Book for {service.name}</button>
                </div>
            </div>
            <div className="container my-5 service-detail">
                <h1>What is the {service.name}?</h1>
                <img className="my-3" src={service.img} alt="..." />
                <h4>{service.description}</h4>
                <br />
                <h2 className="text-start fw-bold bg-info text-success d-inline">Price: $60</h2>
                <br />
                <div>
                    <h1 className="text-center my-5">Why choose our {service.name} package?</h1>
                    <CardGroup>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: 'green' }} icon={faUsers} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">TINY GROUPS</Card.Title>
                                <p className="fs-6">
                                    Personalized experience with every tour with us. 5 travelers per group maximum. Private tours are also available
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: 'green' }} icon={faHandHoldingUsd} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">LOWER PRICE</Card.Title>
                                <p className="fs-6">
                                    Compared to any of your home operators. Book directly and cut the middleman. Save money, travel more.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: 'green' }} icon={faCalendarWeek} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">SCHEDULED TOURS</Card.Title>
                                <p className="fs-6">
                                    Regularly scheduled tours. Suitable for solo travelers to join and reduce cost. Single supplement also available.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: 'green' }} icon={faNotesMedical} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">HIGHEST QUALITY</Card.Title>
                                <p className="fs-6">
                                    350+ reviews & 5/5 rating on TripAdvisor. Awarded Certificate of Excellence 2015, 2016, 2017, 2018 & 2019 consecutively.
                                </p>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    {/* <button className="btn py-2 px-4 fs-5"><FontAwesomeIcon style={{ 
                        color: 'brown' }} icon={faClipboardCheck} size="1x" />&nbsp;Book for {service.name}</button> */}

                    <div className="shipping-form-bg d-flex justify-content-center">
                        <form className="shipping-form my-4" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} /><br />

                            <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} /><br />
                            <input placeholder="City" defaultValue="" {...register("city")} /><br />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} /><br />

                            <input type="submit" value="Book Now" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;