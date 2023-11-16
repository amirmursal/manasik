import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginLayout = () => {
  const { user }: any = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{outlet}</>;
};
