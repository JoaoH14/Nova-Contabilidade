import { useState, useEffect } from 'react';
import './Fixo.css';
import Logo from '../../assets/Vector.svg';

export function Fixo() {
    const [menuAberto, setMenuAberto] = useState(false);

    // NOVO: inicializa lendo a preferência salva (se existir)
    const [modoEscuroAtivo, setModoEscuroAtivo] = useState(() => {
        return localStorage.getItem('tema') === 'escuro';
    });

    function handleClick() {
        setMenuAberto((atual) => !atual);
    }

    function handleModoEscuro() {
        setModoEscuroAtivo((atual) => !atual);
    }

    // NOVO: sempre que modoEscuroAtivo mudar, aplica/remove a classe no <html>
    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', modoEscuroAtivo);
        localStorage.setItem('tema', modoEscuroAtivo ? 'escuro' : 'claro');
    }, [modoEscuroAtivo]);

    return (
        <>
            <header>
                <nav>
                    <a href="#hero"><img className="logo" src={Logo} alt="Nova" /></a>
                    <div
                        className={`mobile-menu ${menuAberto ? 'active' : ''}`}
                        onClick={handleClick}
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className={`link ${menuAberto ? 'active' : ''}`}>
                        <li><a href="#quemsomos">QUEM SOMOS?</a></li>
                        <li><a href="#diferencial">DIFERENCIAL</a></li>
                        <li><a href="#depoimentos">DEPOIMENTOS</a></li>
                        <li><a href="#facaparte"><button type="button">FAÇA PARTE</button></a></li>
                    </ul>
                </nav>

                <button
                    type="button"
                    className={`modoescuro ${menuAberto ? 'escondido' : ''} ${modoEscuroAtivo ? 'ativo' : ''}`}
                    aria-label="Alternar modo escuro"
                    aria-pressed={modoEscuroAtivo}
                    onClick={handleModoEscuro}
                >
                    <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="25" rx="12.5" />
                        <circle cy="13" r="9" />
                    </svg>
                </button>
            </header>
        </>
    )
}