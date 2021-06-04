import {Link} from 'react-router-dom';
import pataMarrom from '../../assets/img/pata-marrom.svg';

import './styles.css';

function Header() {
    return (
        <section id="header">

            <div className="logo">
                <img src={pataMarrom} alt="logo" className="logo"/>
                <h2>{`Pet & Gatô `}</h2>
            </div>

            <ul>
            <li><Link to='/' className="link">Home</Link></li>
            <li><Link to='/About' className="link">Sobre</Link></li>
            <li><Link to='/Services' className="link">Serviços</Link></li>
            <li><Link to='/Contact' className="link">Contato</Link></li>
            </ul>

        </section>
    );
  }
  
  export default Header;


