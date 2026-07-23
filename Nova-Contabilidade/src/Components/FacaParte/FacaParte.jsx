import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FacaParte.css';

const EMAILJS_SERVICE_ID = 'service_esfkjwh';
const EMAILJS_TEMPLATE_ID = 'template_78waj0r';
const EMAILJS_PUBLIC_KEY = 'yIAmMFjiBqMuorC7f';

export function FacaParte() {
    const formRef = useRef(null);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setEnviando(true);
        setErro(false);

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                setEnviando(false);
                setMostrarPopup(true);
                formRef.current.reset();

                setTimeout(() => {
                    setMostrarPopup(false);
                }, 3000);
            })
            .catch((erroEnvio) => {
                console.error('Erro ao enviar:', erroEnvio);
                setEnviando(false);
                setErro(true);
            });
    }

    return (
        <>
            <section id="facaparte" className="FP">
                <div className="txt">
                    <h2>Deixe que a <b>Nova</b> faça parte do <b>futuro</b> da sua empresa</h2>
                    <p>Contate-nos e seja atendido em menos de 15 minutos. O seu futuro começa <b>agora</b></p>
                </div>
                <form
                    className="secoes"
                    id="form-contato"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <div className="secao">
                        <label className="visually-hidden" htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome:" autoComplete="name" required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" htmlFor="email">Email corporativo</label>
                        <input type="email" id="email" name="email" placeholder="Email corporativo:" autoComplete="email" required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" htmlFor="ramo">Ramo de atuação</label>
                        <input type="text" id="ramo" name="ramo" placeholder="Ramo de atuação:" required />
                    </div>
                    <div className="secao">
                        <label className="visually-hidden" htmlFor="whatsapp">Whatsapp</label>
                        <input type="tel" id="whatsapp" name="whatsapp" placeholder="Whatsapp:" autoComplete="tel" required />
                    </div>
                    <div className="secaoG">
                        <label className="visually-hidden" htmlFor="mensagem">O que você busca?</label>
                        <textarea id="mensagem" name="mensagem" placeholder="O que você busca?"></textarea>
                    </div>
                    <button type="submit" disabled={enviando}>
                        {enviando ? 'Enviando...' : 'Enviar'}
                    </button>

                    {erro && (
                        <p className="mensagem-erro">
                            Não foi possível enviar. Tente novamente.
                        </p>
                    )}
                </form>
            </section>

            {mostrarPopup && (
                <div className="popup-sucesso">
                    <p>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>
                </div>
            )}
        </>
    )
}