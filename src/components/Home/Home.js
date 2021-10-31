import React from 'react';
import './Home.css';
import MyCarousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import useFirebase from '../../Hook/useFirebase';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const { isLoading } = useFirebase();
    if (isLoading) {
        return <Spinner animation="grow" variant="success" />
    }
    return (
        <>
            <div className="section-1 box">
                <div className="front-bg">

                    <h1>ADVENTOUR - Refresh Yourself</h1>

                    <h2>Win the whole world through travelling with us</h2>
                    <br /><br />
                    <button className="btn">Book a service</button>
                    <button className="btn">Contact with tour guide</button>
                    <button className="btn">Buy packages</button>
                </div>
            </div>

            <div className="section-2 box">

                <div>
                    <h1>Enjoy the life! Lead a relaxed life!! Be happy!!!</h1>
                    <br />
                    <h2>Adventour is always present here to care about your happiness. Because we believe that a cheerful life is capable to make a chained environment. Be a part of our journey and gather a beautiful experience.</h2>
                </div>

            </div>

            <MyCarousel></MyCarousel>

            <Services></Services>

            <div className="section-5 box">

                <div>
                    <h1 className="bg-success">Frequently Asked Questions</h1>
                    <br />

                    <h2 className="text-success text-start">Why book tours with Adventour?</h2>
                    <p className="text-start mt-0" style={{ color: "black" }}>We are a multi-award-winning <b>local tour operator in Bangladesh</b>with vast local knowledge and the highest quality. We have <span style={{ color: "orange" }}>350+ reviews from our clients</span> with an average rating 5 on 5. We've been <span style={{ color: "orange" }}>featured on International Travel News Magazine</span> multiple times, published from California, USA. <b>You'll have a great experience </b>on your tours. By booking tours with us, you are also <b>supporting a local small business instead of the big foreign corporations </b>who are dominating the tourism industry with their large marketing budget.</p>

                    <h2 className="text-success text-start">Are you running tours during the pandemic?</h2>
                    <p className="text-start mt-0" style={{ color: "black" }}>Despite the pandemic, we are open and running our tours regularly with safety. Check out our <span style={{ color: "orange" }}>1-7 days tour packages in Bangladesh</span> and <span style={{ color: "orange" }}>8-28 days holiday packages in Bangladesh </span> to find details on all of our tours. You can check out the <span style={{ color: "orange" }}>latest Covid-19 travel rules in Bangladesh here.</span></p>

                    <h2 className="text-success text-start">What are the Covid-19 measures on tours?</h2>
                    <p className="text-start mt-0" style={{ color: "black" }}>Wearing masks, cleaning hands frequently, disinfecting the vhehicles are some of the Covid-19 measures we have taken on our tours. Hand Rubs are always available on our vehicles for guests.</p>
                </div>

            </div>
        </>
    );
}

export default Home;