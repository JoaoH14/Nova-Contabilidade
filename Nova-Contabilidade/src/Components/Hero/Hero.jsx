import './Hero.css';
import BlurFundo from '../../assets/BlurFundo.png';

export function Hero() {
    return (
        <section
            id="hero"
            className="Hero"
            style={{ '--bg-hero': `url(${BlurFundo})` }}
        >
            <div className='hero-titulo'>
                <p>O futuro da contabilidade diante dos seus olhos</p>
                <h1>A Nova geração da <br /> assessoria contábil</h1>
            </div>
            <a href="#facaparte"><button>Fale conosco</button></a>
        </section>
    );
}