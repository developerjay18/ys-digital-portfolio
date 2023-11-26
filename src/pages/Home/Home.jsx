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
  Footer
} from '../../components';
import { logos } from '../../components/data';

function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <MovingSlider imgLinks={logos} heading={'Worked with'} />
      <BookSection />
      <Overview />
      <DetailOverview />
      <HireSection />
      <PointsSection />
      <StatsSection />
      <ProcessSection />
      <CaseStudySec />
      <Testimonials />
      <MovingSlider imgLinks={logos} heading={'Internationally certified'} />
      <IntroSection />
      <Banner/>
      <ContactSection/>
      <Footer/>
    </Container>
  );
}

export default Home;
