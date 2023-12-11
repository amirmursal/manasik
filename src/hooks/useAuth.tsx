import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  //const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useCallback(
    async (data: any) => {
      navigate("/dashboard", { replace: true });
    },
    [navigate]
  );

  const logout = useCallback(() => {
    dispatch(setUser({ username: null }));
    navigate("/", { replace: true });
  }, [dispatch, navigate]);

  const value: any = useMemo(
    () => ({
      login,
      logout,
    }),
    [login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
