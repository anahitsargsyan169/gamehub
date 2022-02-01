import { Navigate, Outlet } from "react-router-dom";

import { getId } from "./storage";

const PrivateRoute = () => {  
  return getId() ? <Outlet /> : <Navigate to="/login" />
}

  export default PrivateRoute;