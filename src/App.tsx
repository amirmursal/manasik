import React from "react";
import SearchPanel from "./components/SearchPanel";
import PersonalDetails from "./components/Agent/PersonalDetails";
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<DefaultLayout />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<SearchPanel />} />
          <Route path="addAgentDetails" element={<PersonalDetails />} />
          <Route path="addProgram" element={<AddProgram />} />
          <Route path="addAgentDocuments" element={<AgentDocumentation />} />
          <Route path="managePackage" element={<ManagePackage />} />
          <Route path="manageOffer" element={<ManageOffer />} />
          <Route path="configurePackage" element={<ConfigurePackage />} />
          <Route path="manageSubscription" element={<ManageSubscription />} />
          <Route path="planSubscription" element={<PlanSubscription />} />
          <Route path="myDashboard" element={<MyDashboard />} />
          <Route path="customerPayments" element={<CustomerPayments />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
