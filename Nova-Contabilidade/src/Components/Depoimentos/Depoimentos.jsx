import './Depoimentos.css';
import Arrow from '../../assets/Arrow 1.svg';
import FundoDepoimentos from '../../assets/depoimentos.png';
import { useState } from 'react';


const listaDepoimentos = [
    { texto: '"A Nova trouxe uma organização que nunca tivemos antes. Hoje conseguimos acompanhar tudo de forma prática e eficiente."',
        autor: "- Nexa Studio -" },
    { texto: '"Antes eu perdia metade do meu dia tentando entender o que fazer com nota, boleto e imposto. Hoje eu só entro no painel deles, resolvo o que precisa em 5 minutos e volto a trabalhar. Não troco por nada."',
         autor: "- Rafael Costa, Consultor -" },
    { texto: '"A burocracia antes consumia um tempo precioso da nossa equipe. Com a Nova, ganhamos velocidade e clareza. Tudo é resolvido em poucos cliques e sem complicações."',
        autor: "- Coletivo Prisma -" },
    { texto: '"Como médica, não tenho tempo a perder com papéis e processos lentos. A Nova centralizou todas as minhas obrigações de forma transparente. Tenho total segurança de que tudo está em dia."',
         autor: "- Dra. Camila Ferraz -" },
    { texto: '"Migrar para a Nova foi a melhor decisão do nosso ano. A automação das notas fiscais e o suporte rápido acabaram com aquela dor de cabeça do fim do mês. Hoje nossa contabilidade roda no piloto automático."',
         autor: "- Lumina E-commerce -" },
]

export function Depoimentos() {

    const [indiceAtual, setIndiceAtual] = useState(0)

    function proximoDepoimento() {
        setIndiceAtual((indiceAtual + 1) % listaDepoimentos.length)
    }
    function depoimentoAnterior() {
        setIndiceAtual((indiceAtual - 1 + listaDepoimentos.length) % listaDepoimentos.length)
    }


    return (
        <>
            <section id="depoimentos" className="Depoimentos">
                <button type="button" className="seta-anterior" aria-label="Depoimento anterior">
                    <img src={Arrow} onClick={depoimentoAnterior} />
                </button>
                <div className="depoimentos">
                    <h2>{listaDepoimentos[indiceAtual].texto}</h2>
                    <p>{listaDepoimentos[indiceAtual].autor}</p>
                </div>
                <button type="button" className="seta-proxima" aria-label="Próximo depoimento">
                    <img className="invertida" src={Arrow} onClick={proximoDepoimento} />
                </button>
            </section>
        </>
    )
}