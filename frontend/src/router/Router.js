import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardCustomer from '../pages/DashboardCustomer/DashboardCustomer';
import Login from '../pages/LoginPage/Login';
import Login2 from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import DashboardEmployees from '../pages/DashboardEmployees/DashboardEmployees';


const RouterPath = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<DashboardCustomer />} />
            <Route path="/admin" element={<DashboardAdmin />} />
            <Route path="/employees" element={<DashboardEmployees />} />
        </Routes>
    )
}

export default RouterPath;