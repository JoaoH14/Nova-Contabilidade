import './Diferencial.css';
import Seta from '../../assets/seta.png';
import { IconeAmpulheta, IconeSetaVetor } from './Icones.jsx';

export function Diferencial() {
    return (
        <>
            <section id="diferencial" className="Diferencial">
                <div className="tituloD">
                    <p>O tempo e o método em avanço</p>
                    <h2>Para a Nova contabilidade</h2>
                </div>
                <div className="cardmetodos">
                    <div className="metodos">
                        <div className="tituloCard">
                            <IconeAmpulheta className="icone-ampulheta" />
                            <h3>O Passado</h3>
                        </div>
                        <ul>
                            <li>Processos lentos</li>
                            <li>Excesso de burocracia</li>
                            <li>Atendimento demorado</li>
                            <li>Sistemas ultrapassados</li>
                            <li>Contabilidade limitada</li>
                            <li>Sem acompanhamento 24h</li>
                            <li>Comunicação complicada</li>
                        </ul>
                    </div>
                    <div className="metodos">
                        <div className="tituloCard">
                            <IconeSetaVetor className="icone-setavetor" />
                            <h3>A Nova maneira</h3>
                        </div>
                        <ul>
                            <li>Processos automatizados</li>
                            <li>Gestão simples e digital</li>
                            <li>Atendimento ágil</li>
                            <li>Tecnologia integrada</li>
                            <li>Contabilidade estratégica</li>
                            <li>Dados em tempo real</li>
                            <li>Comunicação clara e eficiente</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}