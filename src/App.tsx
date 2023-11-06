import React from 'react';
import SearchPanel from './components/SearchPanel';
import BankDetails from './components/BankDetails';
import PersonalDetails from './components/PersonalDetails';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddProgram from './components/AddProgram';
import AgentDocumentation from './components/AgentDocumentation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPanel />} />
        <Route path="addAgentDetails" element={<PersonalDetails />} />
        <Route path="addAgentBankDetails" element={<BankDetails />} />
        <Route path="addProgram" element={<AddProgram />} />
        <Route path="addAgentDocuments" element={<AgentDocumentation />} />
      </Route>
    </Routes>
    
  );
}

export default App;
