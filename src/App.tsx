import React from 'react';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import SearchPanel from './components/SearchPanel';
import BankDetails from './components/BankDetails';
import PersonalDetails from './components/PersonalDetails';

const App =()=> {
  return (
    <>
     <MainNavigation/>
{/*      
     <SearchPanel/>
     <Footer/> 
     <BankDetails/>
     */}
     <PersonalDetails/>
    </>
  );
}

export default App;
