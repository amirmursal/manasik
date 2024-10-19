import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const LoginLayout = () => {
  const user = useSelector((state: RootState) => state.user);
  const outlet = useOutlet();

  if (user?.role?.length > 0) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{outlet}</>;
};

export default LoginLayout;
