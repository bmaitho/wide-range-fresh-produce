import Hero         from '../components/Hero';
import Model        from '../components/Model';
import HowItWorks   from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero
        image="/assets/chili-hero.jpg"
        tagline="Your Trusted Chili Farming Partner"
      />

      <section className="section">
        <Model />
      </section>

      <section className="section section--alt">
        <HowItWorks />
      </section>

      <section className="section">
        <Testimonials />
      </section>
    </>
  );
}
