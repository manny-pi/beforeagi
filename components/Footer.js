export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>beforeagi.org</h3>
            <p>A Chronicle of Humanity on the Cusp of Transformational Change</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} beforeagi.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
