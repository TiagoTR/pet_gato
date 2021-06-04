import Header from '../../components/Header';

import dog from  '../../assets/icons/cachorro.svg';
import cat from  '../../assets/icons/gato.svg';
import hamster from  '../../assets/icons/hamster.svg';
import rabbit from  '../../assets/icons/coelho.svg';
import paw from  '../../assets/icons/pe.svg';

import leftArrow from '../../assets/icons/leftArrow.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';

import caixaTransporte from '../../assets/img/caixa_transporte.svg';
import coleira from  '../../assets/img/coleira.svg';
import comedouro from '../../assets/img/comedouro.svg';

import './styles.css';
import Title from '../../components/Title';

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

        <section id="produtos">
            <Title name="Produtos" />

            <div className="cards-scroll">
              <img src={leftArrow} alt="seta esquerda" className="seta"/>
              
              <div className="card">
                <img src={coleira} />
                <h3>Coleiras</h3>
              </div>

              <div className="card">
                <img src={comedouro} />
                <h3>Comedouros</h3>
              </div>

              <div className="card">
                <img src={caixaTransporte} />
                <h3>Caixa de Transporte</h3>
              </div>

              <img src={rightArrow} alt="seta direita" className="seta"/>
            </div>
        </section>

        <section id="clientes">
          
          <Title name="Clientes Felizes" />
          <div className="">

          </div>
        
        </section>

        <section id="footer">

        </section>
        </div>
    </div>
  );
}

export default Home;