import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import ClientLogos from '../components/ClientLogos';
import SecurityBanner from '../components/SecurityBanner';
import CoreSolutions from '../components/CoreSolutions';
import FlagshipProducts from '../components/FlagshipProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import TechStack from '../components/TechStack';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <ClientLogos />
      <SecurityBanner />
      <CoreSolutions />
      <FlagshipProducts />
      <WhyChooseUs />
      <Industries />
      <TechStack />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
