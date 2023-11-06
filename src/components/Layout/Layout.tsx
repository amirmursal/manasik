import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import Footer from "../Footer";


const Layout = () => {
    return (
        <>
           <MainNavigation />
            <Outlet />
             {/* <Footer />  */}
        </>
    )
}

export default Layout; 