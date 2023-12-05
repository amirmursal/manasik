import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { setUserRole, removeUserRole } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useCallback(
    async (data: any) => {
      setUser(data);
      dispatch(setUserRole());
      navigate("/dashboard", { replace: true });
    },
    [dispatch, navigate, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    dispatch(removeUserRole());
    navigate("/", { replace: true });
  }, [dispatch, navigate, setUser]);

  const value: any = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
