import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Media() {
  // Replace these filenames with your real assets under public/assets/
  const images = [
    'field1.jpg',
    'field2.jpg',
    'field3.jpg',
    'field4.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="container section section--alt">
      <h2>Our Fields in Action</h2>
      <Slider {...settings}>
        {images.map((file, i) => (
          <div key={i}>
            <img
              src={`/assets/${file}`}
              alt={`Chili field ${i+1}`}
              className="hover-zoom"
              style={{ borderRadius: '0.5rem' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
