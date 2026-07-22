import './Depoimentos.css';
import Arrow from '../../assets/Arrow 1.svg';
import FundoDepoimentos from '../../assets/depoimentos.png';


export function Depoimentos() {
    return (
        <>
            <section id="depoimentos" className="Depoimentos">
                <button type="button" className="seta-anterior" aria-label="Depoimento anterior">
                    <img src={Arrow} alt="" />
                </button>
                <div className="depoimentos">
                    <h2>"A Nova trouxe uma organização que nunca tivemos antes. Hoje conseguimos acompanhar tudo de forma
                        prática e eficiente."</h2>
                    <p>- Nexa Studio -</p>
                </div>
                <button type="button" className="seta-proxima" aria-label="Próximo depoimento">
                    <img className="invertida" src={Arrow} alt="" />
                </button>
            </section>
        </>
    )
}