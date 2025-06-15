import Model      from '../components/Model';
import HowItWorks from '../components/HowItWorks';

export default function About() {
  return (
    <>
      <section className="section">
        <h1>About Wide Range Fresh Produce Ltd</h1>
        <p>
          Wide Range Fresh Produce Ltd is a Kenyan agribusiness committed to professional chili farming.
          Our founder has years of experience in chili cultivation and leads a dedicated team focused
          on helping farmers across the country access consistent markets.
        </p>
      </section>

      <section className="section section--alt">
        <Model />
      </section>

      <section className="section">
        <HowItWorks />
      </section>
    </>
  );
}
