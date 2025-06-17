import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AlternativeHero from './AlternativeHero';
import Explanation from './Explanation';
import Process from './Process';
import TalentCategories from './TalentCategories';
import WhyChooseUsWithForm from './WhyChooseUsWithForm';
import ButtonGradient from '../../assets/svg/ButtonGradient';
import { AnimatedLines } from '../../components/ui/animated-line';

const StaffAugmentation = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <AlternativeHero />
        <Process />
        <Explanation />
        <TalentCategories />
        <WhyChooseUsWithForm />
        <Footer />
        <AnimatedLines />
      </div>
      <ButtonGradient />
    </>
  );
};

export default StaffAugmentation; 