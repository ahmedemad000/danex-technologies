import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import DualPillars from '../components/sections/DualPillars';
import TrustBar from '../components/sections/TrustBar';
import ServicesShowcase from '../components/sections/ServicesShowcase';
import CallToAction from '../components/sections/CallToAction';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Home = () => {
  useSmoothScroll();

  return (
    <Layout 
      seoTitle="Home - Intelligent Systems Engineering"
      seoDescription="Danex Technologies delivers AI-Enabled Engineering & Intelligent Software Testing solutions for enterprise applications."
    >
      <Hero />
      <DualPillars />
      <TrustBar />
      <ServicesShowcase />
      <CallToAction />
    </Layout>
  );
};

export default Home;