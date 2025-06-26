import React from 'react';
import './Media.css';

const journalEntries = [
  {
    date: '2025-06-15',
    title: 'First Harvest of Hot Cayenne',
    summary:
      'We wrapped up our first official Hot Cayenne harvest, shipping 2 tons to regional markets. The quality tests showed 45,000 SHU and outstanding color consistency.',
    image: require('../assets/Byadgi Chilli Farm.jpeg'),
  },
  {
    date: '2025-05-01',
    title: 'New Greenhouse Installed',
    summary:
      'Our new 1,000 sq m greenhouse is now operational—enabling year-round seedling production and tighter climate control.',
    image: require('../assets/Country side life, home grown food.jpeg'),
  },
  // …add more entries here
];

const videoTours = [
  {
    id: 'a1b2c3d4e5', // replace with your YouTube or Vimeo ID
    title: 'Wide Range Farm Walk-through',
  },
  {
    id: 'f6g7h8i9j0',
    title: 'How We Dry and Pack Our Chilies',
  },
  // …add more videos
];

export default function Media() {
  return (
    <main className="media-page container section">
      <h1>Media & Pressroom</h1>

      {/* Farm Journal */}
      <section className="journal-section">
        <h2>Farm Journal</h2>
        <div className="journal-grid">
          {journalEntries.map((entry, idx) => (
            <article key={idx} className="journal-card">
              <img src={entry.image} alt={entry.title} loading="lazy" />
              <div className="journal-content">
                <time dateTime={entry.date}>
                  {new Date(entry.date).toLocaleDateString()}
                </time>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video Tours */}
      <section className="videos-section">
        <h2>Video Tours</h2>
        <div className="videos-grid">
          {videoTours.map((vid, idx) => (
            <div key={idx} className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${vid.id}`}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="video-title">{vid.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
