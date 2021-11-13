
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Soaps from './Pages/Collections/Soaps/Soaps';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import PrivetRoute from './ProtectedRoute/PrivetRoute/PrivetRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/collections">
            <Soaps />
          </Route>

          <PrivetRoute path="/placeorder/:id">
            <PlaceOrder />
          </PrivetRoute>

          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
