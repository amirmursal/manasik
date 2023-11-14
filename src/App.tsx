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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPanel />} />
          <Route path="addAgentDetails" element={<PersonalDetails />} />
          <Route path="addProgram" element={<AddProgram />} />
          <Route path="addAgentDocuments" element={<AgentDocumentation />} />
          <Route path="managePackage" element={<ManagePackage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
