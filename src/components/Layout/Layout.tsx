import { Navigate, useOutlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
//import Footer from "../Footer";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
  const { user }: any = useAuth();
  const outlet = useOutlet();
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <MainNavigation />
      {outlet}
      {/* <Footer />  */}
    </>
  );
};

export default Layout;
