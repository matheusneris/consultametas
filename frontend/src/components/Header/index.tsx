import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="meta-logo-container">
                    <img src={logo} alt="Meta" />
                        <h1>Meta</h1>
                        <p>Desenvolvido por Matheus (<a href="https://github.com/matheusneris">github.com/matheusneris</a>)</p>
                </div>
            </header>
        </>
    )
}

export default Header