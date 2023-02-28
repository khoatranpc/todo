import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

const LayoutAuth = () => {
    return (
        <div className="container-layout-auth">
            <Outlet />
        </div>
    )
}

export default LayoutAuth