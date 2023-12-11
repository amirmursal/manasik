import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { RootState } from "../store";
import { useSelector } from "react-redux";

export const LoginLayout = () => {
  const user = useSelector((state: RootState) => state.user);
  const outlet = useOutlet();

  if (user?.username?.length > 0) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{outlet}</>;
};
