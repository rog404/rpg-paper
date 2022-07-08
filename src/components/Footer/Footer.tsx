import './Footer.css';
import { FaPlus, FaCogs, FaDiceD20 } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer--item footer--addTurno">
        <FaPlus className="footer--icon" />
      </div>
      <div className="footer--item footer--labelTurno">
        <FaDiceD20 className="footer--icon" />
      </div>
      <div className="footer--item footer--More">
        <FaCogs className="footer--icon" />
      </div>
    </footer>
  );
}

export default Footer;
