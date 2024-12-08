import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import EngineeringServicesSection from '../../components/home/EngineeringServicesSection';
import AboutSection from '../../components/home/AboutSection';
import PartnersSection from '../../components/home/PartnersSection';

const HomePage: React.FC = () => {
  return (
    <>
        <HeroSection />
        <EngineeringServicesSection />
        <AboutSection />
        <PartnersSection />
    </>
  );
};

export default HomePage;