import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const HomePage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('introduction');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="flex">
        <Sidebar 
          selectedEndpoint={selectedEndpoint}
          onSelectEndpoint={setSelectedEndpoint}
        />
        <MainContent selectedEndpoint={selectedEndpoint} />
      </div>
    </div>
  );
};

export default HomePage;