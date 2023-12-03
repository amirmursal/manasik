import React from "react";
import SearchPanel from "./components/SearchPanel";
import PersonalDetails from "./components/Agent/PersonalDetails";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddProgram from "./components/AddProgram";
import AgentDocumentation from "./components/Agent/AgentDocumentation";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ManagePackage from "./components/ManagePackage";
import AgentLogin from "./components/Agent/AgentLogin";
import { LoginLayout } from "./components/LoginLayout";
import ManageOffer from "./components/ManageOffer";
import ConfigurePackage from "./components/ConfigurePackage";
import ManageSubscription from "./components/ManageSubscription";
import PlanSubscription from "./components/PlanSubscription";
import DefaultLayout from "./components/DefaultLayout";
import Footer from "./components/Footer";
import MyDashboard from "./components/MyDashboard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/login" element={<AgentLogin />} />
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
          <Route path="myDashboard" element={<MyDashboard/>} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
