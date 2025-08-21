import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
      const location = useLocation()
      
      const {user, loading} = useContext(AuthContext)
      if(loading){
            return <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
      }
      if(user){
            return children
      }
      return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;