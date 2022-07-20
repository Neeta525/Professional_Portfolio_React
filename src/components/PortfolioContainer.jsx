import React, { useState } from 'react';
import NavTabs from './NavTabs';

import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import '../styles/Pages.css';
import Footer from  '../components/Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className ='mainContainer'>
<div className = 'contentContainer'>
<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
</div>

      <Footer />
    </div>

  );

  
}