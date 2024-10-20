import React from "react";
import SearchPanel from "./components/SearchPanel";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddProgram from "./components/Agent/AddProgram";
import AgentDocumentation from "./components/Agent/AgentDocumentation";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ManagePackage from "./components/Agent/ManagePackage";
import Login from "./components/Login";
import ManageOffer from "./components/Agent/ManageOffer";
import ConfigurePackage from "./components/Agent/ConfigurePackage";
import ManageSubscription from "./components/Agent/ManageSubscription";
import PlanSubscription from "./components/Agent/PlanSubscription";
import DefaultLayout from "./components/DefaultLayout";
import Footer from "./components/Footer";
import MyDashboard from "./components/Agent/MyDashboard";
import CustomerPayments from "./components/Agent/CustomerPayments";
import LoginLayout from "./components/LoginLayout";
import SignUp from "./components/SignUp";
import AgencyDetails from "./components/Agent/AgencyDetails/AgencyDetails";
import AgencyLocation from "./components/Agent/AgencyLocation/AgencyLocation";
import AgencyBank from "./components/Agent/AgencyBank/AgencyBank";
import AgencyDocuments from "./components/Agent/AgencyDocuments/AgencyDocuments";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route index element={<DefaultLayout />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<SearchPanel />} />
          <Route path="agencydetails" element={<AgencyDetails />} />
          <Route path="agencylocation" element={<AgencyLocation />} />
          <Route path="agencybank" element={<AgencyBank />} />
          <Route path="agencydocuments" element={<AgencyDocuments />} />
          <Route path="addorogram" element={<AddProgram />} />
          <Route path="addagentdocuments" element={<AgentDocumentation />} />
          <Route path="managepackage" element={<ManagePackage />} />
          <Route path="manageoffer" element={<ManageOffer />} />
          <Route path="configurepackage" element={<ConfigurePackage />} />
          <Route path="managesubscription" element={<ManageSubscription />} />
          <Route path="plansubscription" element={<PlanSubscription />} />
          <Route path="mydashboard" element={<MyDashboard />} />
          <Route path="customerpayments" element={<CustomerPayments />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
