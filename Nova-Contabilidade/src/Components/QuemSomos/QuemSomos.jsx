import './QuemSomos.css';
import FundoCards from '../../assets/FundoCards.png';
import FundoLogo from '../../assets/fundologo.png';
import FundoLogoMobile from '../../assets/LogoG-Mobile.png';



export function QuemSomos() {
    return (
        <>
            <section id="quemsomos" className="Quemsomos">
                <div className="tituloQS">
                    <h2>Nossos Valores</h2>
                    <p>Muito mais que números. Muito mais que uma empresa</p>
                </div>
                <div className="QScards">
                    <div className="qscard">
                        <span className="numero" aria-hidden="true">1.</span>
                        <h3>Tecnologia</h3>
                        <p>Tecnologia e inovação fazem parte da maneira Nova de trabalhar. Utilizamos processos digitais
                            e soluções inteligentes para tornar sua contabilidade mais moderna, ágil e preparada para o
                            futuro.</p>
                    </div>
                    <div className="qscard">
                        <span className="numero" aria-hidden="true">2.</span>
                        <h3>Simplicidade</h3>
                        <p>Descomplicamos a rotina da sua empresa com atendimento acessível, comunicação clara e
                            processos simples. Menos burocracia, mais praticidade para o seu dia a dia.</p>
                    </div>
                    <div className="qscard">
                        <span className="numero" aria-hidden="true">3.</span>
                        <h3>Inteligência</h3>
                        <p>Transformamos dados e organização em decisões mais eficientes. Com acompanhamento estratégico
                            e soluções inteligentes, ajudamos sua empresa a crescer com mais segurança.</p>
                    </div>
                </div>
            </section>

            <section className="LogoG" aria-label="Números da Nova">
                <div className="txt1">
                    <p><span>+450</span> <br /> Empresas <br /> Atendidas</p>
                </div>
                <div className="txt2">
                    <p><span>+R$ 8</span> <br /> Milhões <br /> Gerenciados</p>
                </div>
                <div className="txt3">
                    <p>Atendimento <br /> <span>100%</span> <br /> Digital</p>
                </div>
                <div className="txt4">
                    <p><span>+12</span> <br /> Anos de <br /> Experiência</p>
                </div>
                <div className="txt51">
                    <p><span>85%</span></p>
                </div>
                <div className="txt52">
                    <p>de Processos <br />Automatizados</p>
                </div>
                <div className="txt6">
                    <p>Presença em <br /> Todo o Brasil</p>
                </div>
            </section>
        </>
    );
}