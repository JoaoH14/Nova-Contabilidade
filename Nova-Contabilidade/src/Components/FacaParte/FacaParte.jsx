import './FacaParte.css';

export function FacaParte() {
    return (
        <>
            <section id="facaparte" className="FP">
                <div className="txt">
                    <h2>Deixe que a <b>Nova</b> faça parte do <b>futuro</b> da sua empresa</h2>
                    <p>Contate-nos e seja atendido em menos de 15 minutos. O seu futuro começa <b>agora</b></p>
                </div>
                <form className="secoes" id="form-contato" novalidate>
                    <div className="secao">
                        <label className="visually-hidden" for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome:" autocomplete="name" required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" for="email">Email corporativo</label>
                        <input type="email" id="email" name="email" placeholder="Email corporativo:" autocomplete="email"
                            required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" for="ramo">Ramo de atuação</label>
                        <input type="text" id="ramo" name="ramo" placeholder="Ramo de atuação:" required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" for="whatsapp">Whatsapp</label>
                        <input type="tel" id="whatsapp" name="whatsapp" placeholder="Whatsapp:" autocomplete="tel" required />
                    </div>
                    <div className="secaoG">
                        <label className="visually-hidden" for="mensagem">O que você busca?</label>
                        <textarea id="mensagem" name="mensagem" placeholder="O que você busca?"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}