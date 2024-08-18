export function Navbar() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="inicio.html" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img className="logo" src="imgs/logo_escuro_1.png" alt="Logo" />
            </a>
        
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="inicio.html" className="nav-link px-2 link-white">INÍCIO</a></li>
                <li><a href="sobre.html" className="nav-link px-2 link-white">SOBRE</a></li>
                <li><a href="cursos.html" className="nav-link px-2 link-white">CURSOS</a></li>
                <li><a href="docentes.html" className="nav-link px-2 link-white">DOCENTES</a></li>
                <li><a href="forms/formulario-trabalhe-conosco.html" className="nav-link px-2 link-white">TRABALHE CONOSCO</a></li>
                <li><a href="forms/formulario-contato.html" className="nav-link px-2 link-white">CONTATO</a></li>
                <li><a href="aula.html" className="nav-link px-2 link-white">AULA</a></li>
            </ul>

            <div id="login" className="col-md-3 text-end">
                <a type="button" className="btn btn-secondary mx-5" href="forms/cart.html">
                    <img src="imgs/carrinho.png"  width="24" height="24" alt="Carrinho de Compras" />
                </a>
                <a type="button" className="btn btn-outline-primary me-2" href="forms/login.html">Login</a>
                <a type="button" className="btn btn-primary" href="forms/formulario-matricula.html">Registrar-se</a>
            </div>
            <div id="loggedin">
                <p id="message"></p>
                <button type="button" className="btn btn-secondary">Sair</button>
                <a type="button" className="btn btn-secondary" href="forms/cart.html">
                    <img src="imgs/carrinho.png"  width="24" height="24" alt="Carrinho de Compras" />
                </a>
            </div>
        </header>
    )
}