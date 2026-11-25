import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>M D B</h3>
          <p>Find and compare hotels across India. Sample project built with React.</p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help centre</li>
            <li>Cancellation policy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>support@stayfinder.example</li>
            <li>+91 98765 43210</li>
            <li>Coimbatore, Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© 2026 StayFinder. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
