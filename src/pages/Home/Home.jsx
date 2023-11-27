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
} from '../../components';
import { logos, companies } from '../../components/data';

function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <MovingSlider links={logos} />
      <BookSection />
      <Overview />
      <DetailOverview />
      <HireSection />
      <PointsSection />
      <StatsSection />
      <ProcessSection />
      <CaseStudySec />
      <Testimonials />
      <MovingSlider links={companies} />
      <IntroSection />
      <Banner />
      <ContactSection />
      <Footer />
    </Container>
  );
}

export default Home;
