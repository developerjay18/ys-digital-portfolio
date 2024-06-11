import React from 'react';
import {
  Header,
  Container,
  HeroSection,
  MovingSlider,
  BookSection,
  Overview,
  DetailOverview,
  HireSection,
  PointsSection,
  StatsSection,
  ProcessSection,
  CaseStudySec,
  Testimonials,
  IntroSection,
  Banner,
  ContactSection,
  Footer,
  BurgerMenu,
  ScrollToTop,
  VideoSection,
} from '../../components';
import { logos, companies } from '../../components/data';
import { Group } from '../../assets';

function Home() {
  return (
    <Container>
      <ScrollToTop />
      <Header />
      <BurgerMenu /> {/*visibles oly when user toggle burger menu*/}
      <HeroSection />
      <MovingSlider links={companies} heading={`worked with`} />
      <VideoSection /> {/*11-06-2024*/}
      <BookSection />
      <ProcessSection />
      <Overview />
      <DetailOverview />
      <HireSection />
      <PointsSection />
      <StatsSection />
      <img src={Group} alt="group-image" className="mb-10" />
      <CaseStudySec />
      <Testimonials />
      <MovingSlider links={logos} heading={`certified from`} />
      <IntroSection />
      <Banner />
      <ContactSection />
      <Footer />
    </Container>
  );
}

export default Home;
