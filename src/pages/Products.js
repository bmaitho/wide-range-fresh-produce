import Button from '../components/Button';

export default function Products() {
  // replace with your real assets / descriptions
  const products = [
    {
      name: 'Organic Red Chilies',
      img: '/assets/field1.jpg',
      desc: 'Hand-harvested, sun-dried, premium spice.',
    },
    {
      name: 'Green Chili Varieties',
      img: '/assets/field2.jpg',
      desc: 'Spicy and vibrant, perfect for stews.',
    },
    {
      name: 'Chili Farming Consultation',
      img: '/assets/field3.jpg',
      desc: 'Expert agronomy support to boost yields.',
    },
    {
      name: 'Bulk Wholesale Packs',
      img: '/assets/field4.jpg',
      desc: 'Cost-effective packaging for retailers.',
    },
  ];

  return (
    <section className="container section section--alt">
      <h2>Our Products & Services</h2>
      <div className="card-grid">
        {products.map((p,i) => (
          <div key={i} className="card">
            <img src={p.img} alt={p.name} />
            <div className="card-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <Button to="/contact" variant="secondary">
                Enquire Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
