export default function HowItWorks() {
  const steps = [
    { title: 'Guaranteed Market', desc: 'Contracts with major distributors.' },
    { title: 'Quality Control', desc: 'On-site inspections every 2 weeks.' },
    { title: 'Harvest Schedules', desc: 'Harvest synced to demand cycles.' },
  ];

  return (
    <section className="container" style={{ padding: '4rem 0', background: 'var(--clr-bg)' }}>
      <h2>How It Works</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ flex: '1 1 200px' }}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
