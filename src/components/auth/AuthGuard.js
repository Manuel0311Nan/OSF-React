import { useAuthState } from "../../context";
import { Navigate } from "react-router-dom";


function AuthGuard({children}) {
  const { user } = useAuthState();

  return <>{user ? children  : <Navigate to="/" />}</>;
}

export default AuthGuard;