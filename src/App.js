import React from 'react';
import Navbar from './components/Navbar';
import MiddlePart from './components/MiddlePart';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <MiddlePart />
        <Footer/>

      </div>



    </>
  );
}

export default App;
