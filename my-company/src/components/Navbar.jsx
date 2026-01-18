import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
