export default function Footer() {
  return (
    <footer style={{
      background: 'var(--clr-secondary)',
      color: '#fff',
      padding: '2rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>Contact Us</h3>
          <p>📧 info@widerangefreshproduce.com</p>
          <p>📞 +254 7X XXX XXXX</p>
          <p>🏠 Kajiado County, Kenya</p>
        </div>
        <div style={{ alignSelf: 'center' }}>
          &copy; {new Date().getFullYear()} Wide Range Fresh Produce Ltd
        </div>
      </div>
    </footer>
  );
}
