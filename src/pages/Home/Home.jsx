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
import { Group } from '../../assets';

function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <MovingSlider links={companies} heading={`worked with`} />
      <BookSection />
      <ProcessSection />
      <Overview />
      <DetailOverview />
      <HireSection />
      <PointsSection />
      <StatsSection />
      <img src={Group} alt="group-image" />
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
