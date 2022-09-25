import type { NextPage } from 'next';
import PageTitle from '../components/PageTitle';
import AboutSection from '../components/component-home/AboutSection';
import HeroSection from '../components/component-home/HeroSection';
import HeaderSection from '../components/component-home/HeaderSection';
import PortfolioSection from '../components/component-home/PortfolioSection';
import SkillsSection from '../components/component-home/SkillsSection';
import AchievementSection from '../components/component-home/AchievementSection';
import ContactSection from '../components/component-home/ContactSection';
import { useEffect } from 'react';
import FooterSection from '../components/component-home/FooterSection';
const Home: NextPage = () => {

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > header.offsetTop) {
          header.classList.add('navbar-fixed');
        }else {
          header.classList.remove('navbar-fixed');
        }
      }
    }
  }, []);

  return (
    <>
      <PageTitle titlePage="Home" />

      {/* Header Section Start */}
      <HeaderSection />
      {/* Header Section End */}


      {/* Hero Section Start */}
      <HeroSection />
      {/* Hero Section End */}
      

      {/* Hero Section Start */}
      <AboutSection />
      {/* Hero Section End */}

      {/* Portfolio Section Start */}
      <PortfolioSection />
      {/* Portfolio Section End */}


      {/* Skills Section Start */}
      <SkillsSection />
      {/* Skills Section End */}


      {/* Achievement Section Start */}
      <AchievementSection />
      {/* Achievement Section End */}

      {/* Contact Section Start */}
      <ContactSection />
      {/* Contact Section End */}

      {/* Footer Section Start */}
      <FooterSection />
      {/* Footer Section End */}

    </>
  )
}

export default Home;
