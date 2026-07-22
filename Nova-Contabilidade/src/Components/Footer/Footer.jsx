import './Footer.css';
import LogoCompleta from '../../assets/Logocompleta.png';
import FundoFooter from '../../assets/FundoFooter.png';


export function Footer() {
    return (
        <>    
        <footer>
        <div className="texto">
            <p>contato@nova.com</p>
            <p>&copy; 2026 Todos os direitos reservados</p>
            <ul>
                <li>
                    <h2>Redes</h2>
                </li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>+50 48999999999</li>
            </ul>
            <ul>
                <li>
                    <h2>Empresa</h2>
                </li>
                <li><a href="#quemsomos">Quem somos</a></li>
                <li><a href="#diferencial">Diferencial</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#facaparte">Faça Parte</a></li>
            </ul>
        </div>
        <div className="imagem">
            <img src={LogoCompleta} alt="Logo Nova"/>
        </div>
    </footer>

    <script src="mobile-navbar.js"></script>
    </>
    )
}