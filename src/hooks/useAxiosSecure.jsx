import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    // interceptor=======================
    axiosSecure.interceptors.response.use(
        res=> {
            return res
        },
        async error=> {
            console.log('Interceptor error from axios', error.response);
            if(error.response.status === 401 || error.response.status === 403){
               await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        }
        
    )

    return axiosSecure
};

export default useAxiosSecure;