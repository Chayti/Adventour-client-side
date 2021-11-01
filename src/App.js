import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Admin from './components/Admin/Admin/Admin';
import MyBookings from './components/MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute exact path="/mybookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
