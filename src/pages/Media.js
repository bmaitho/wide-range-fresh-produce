import React from 'react';
import './Media.css';

export default function Media() {
  // Example: list of press links or embedded videos
  const pressItems = [
    { title: 'Article: How we revolutionize chili supply-chain', url: '#' },
    { title: 'Interview on AgriTech Podcast', url: '#' },
    // ...
  ];
  const videos = [
    { title: 'Farm Tour', embedUrl: 'https://www.youtube.com/embed/...' },
    // ...
  ];

  return (
    <main className="media-page container">
      <h1>Media & Press</h1>
      <section className="press-section">
        <h2>Press</h2>
        <ul>
          {pressItems.map((item, idx) => (
            <li key={idx}><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></li>
          ))}
        </ul>
      </section>
      <section className="video-section">
        <h2>Videos</h2>
        {videos.map((v, idx) => (
          <div key={idx} className="video-embed">
            <iframe
              width="100%"
              height="315"
              src={v.embedUrl}
              title={v.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{v.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
