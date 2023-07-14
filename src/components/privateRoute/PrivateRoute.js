import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute( { isAuth } ) {
    return (
        isAuth === true ? <Outlet/> : <Navigate to="/"/>
    );
}
export default PrivateRoute;