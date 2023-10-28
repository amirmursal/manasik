import React from 'react';
import SearchPanel from './components/SearchPanel';
import BankDetails from './components/BankDetails';
import PersonalDetails from './components/PersonalDetails';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPanel />} />
        <Route path="addAgentDetails" element={<PersonalDetails />} />
        <Route path="addAgentBankDetails" element={<BankDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
