const data = [
  { name: 'John Mwangi', text: 'Their chili yield doubled my revenue!' },
  { name: 'Grace Njeri', text: 'Reliable partner—always on time.' },
];

export default function Testimonials() {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h2>What Farmers Say</h2>
      {data.map((t, i) => (
        <blockquote key={i} style={{ margin: '2rem 0', fontStyle: 'italic' }}>
          “{t.text}” — <strong>{t.name}</strong>
        </blockquote>
      ))}
    </section>
  );
}
