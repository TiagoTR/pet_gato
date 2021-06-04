import Header from '../../components/Header';

import dog from  '../../assets/icons/cachorro.svg';
import cat from  '../../assets/icons/gato.svg';
import hamster from  '../../assets/icons/hamster.svg';
import rabbit from  '../../assets/icons/coelho.svg';
import paw from  '../../assets/icons/pe.svg';


import './styles.css';

function Home() {
  return (
    <div id="home">
        <div className="patinhas"> 
        
        <Header/>
        
        <section id="intro">
          <h2>Melhor lugar pra fazer seu pet feliz</h2>
          <div className="icons">
            <img src={dog} alt="cachorro" />
            <img src={cat} alt="gato"/>
            <img src={hamster} alt="hamster"/>
            <img src={rabbit} alt="coelho"/>
            <img src={paw} alt="pata"/>
          </div>
        </section>

        <section id="Produtos">
            
        </section>

        <section id="clientes">
            
        </section>

        <section id="footer">

        </section>
        </div>
    </div>
  );
}

export default Home;