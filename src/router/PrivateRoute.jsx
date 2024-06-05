import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) return <span className="loading loading-spinner text-accent"></span>;
    if(user) return children;
    return <Navigate to='/login' state={location.pathname} replace={true}/>
};

export default PrivateRoute;