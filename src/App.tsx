import React from 'react';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import SearchPanel from './components/SearchPanel';
import BankDetails from './components/BankDetails';

const App =()=> {
  return (
    <>
     <MainNavigation/>
{/*      
     <SearchPanel/>
     <Footer/> */}
     <BankDetails/>
    </>
  );
}

export default App;
