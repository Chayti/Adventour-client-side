import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hook/useFirebase';

const Header = () => {
  const style = {
    fontWeight: "bold",
    color: "#00b9d1"
  }
  const { user, handleLogout } = useFirebase();
  return (
    <div className="pt-4 rounded header">

      <div className="d-flex justify-content-start">
        <img className="logo" src={logo} alt="" />
        <div style={{ lineHeight: '8px' }} className="title ms-2">
          <h4 className="fw-bold">Adventour</h4>
          <p>--Refresh yourself--</p>
        </div>
      </div>

      <Navbar className="py-1 mt-3" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link as={Link} to="/home" className="link">HOME</Nav.Link>
            <Nav.Link as={Link} to="/services" className="link">OUR SERVICES</Nav.Link>
            {
              user.email ?
                <Nav.Link as={Link} to="/myBookings" className="link">MY BOOKINGS</Nav.Link>
                : <p></p>

            }
            {
              user.email ?
                <span className="mx-4 px-1 my-0 text-light">Hello, {user.displayName}</span>
                : <p></p>
            }
            {
              user.email ?
                <img width="30" style={{ borderRadius: "50%", border: "1px solid wheat", color: "white" }} src={user.photoURL} alt="user" />
                : <p></p>
            }
            {
              user.email ?
                <Nav.Link as={Link} to="/admin" className="link"><button className="px-4 btn bg-info border-0 m-0">Admin</button></Nav.Link>
                : <p></p>

            }
            {
              user.email
                ? <button onClick={handleLogout} className="btn border-0 ms-2"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                : <NavLink to="/login" activeStyle={style} className="link"><button className="btn btn-warning m-0"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Login</button></NavLink>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;