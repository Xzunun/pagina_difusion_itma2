
import { useState } from 'react';

import './Encabezado.css';

const Encabezado = (props) => {
    const [nav, setNav] = useState('');
    window.addEventListener('scroll', () => {
        window.scrollY > 150 ? setNav(nav => nav = 'sticky-top shadow-lg') : setNav('');
    });
    return (
        <>
            <header>
                <ul className="nav d-none d-md-flex justify-content-between px-3 py-1 shadow-lg barra-contacto">
                    <div className="d-inline-flex">
                        <li className="nav-item">
                            <a href="mailto:dir_milpaalta2@tecnm.mx" className="nav-link text-secondary"><i className="bi bi-envelope-fill me-2"></i>dir_milpaalta2@tecnm.mx</a>
                        </li>
                        <li className="nav-item">
                            <a href="tel:5558446824" className="nav-link text-secondary"><i className="bi bi-telephone-fill me-2"></i>55 5844 6824</a>
                        </li>
                    </div>
                    <div className="d-inline-flex">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/tecmilpaalta2" target="_blank" rel="noopener noreferrer" className="nav-link text-secondary solo-icono"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/TecNMMilpaAlta2" target="_blank" rel="noopener noreferrer" className="nav-link text-secondary solo-icono"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.youtube.com/channel/UCXJVuz9lnFc03mObS-0wYOg" target="_blank" rel="noopener noreferrer" className="nav-link text-secondary solo-icono"><i className="bi bi-youtube"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/itma2" target="_blank" rel="noopener noreferrer" className="nav-link text-secondary solo-icono"><i className="bi bi-github"></i></a>
                        </li>
                    </div>
                </ul>
                <div className="container-fluid position-relative p-0">
                    <nav className={nav + " navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"}>
                        <a href="/" className="navbar-brand p-0"><h1 className="m-0">ITMA II</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="bi bi-list"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <div className="d-flex justify-content-around text-center">
                                    <a href="http://itmilpaalta2.net/admision/" className="nav-item nav-link px-2"><i className="bi bi-person-plus-fill me-2"></i><span className="d-flex d-sm-block d-md-inline">Admisión</span></a>
                                    <a href="http://itmilpaalta2.net/preregistro/" className="nav-item nav-link px-2"><i className="bi bi-layout-text-sidebar-reverse me-2"></i><span className="d-flex d-sm-block d-md-inline">Preregistro</span></a>
                                    <a href="http://itmilpaalta2.net/" className="nav-item nav-link px-2"><i className="bi bi-globe me-2"></i><span className="d-flex d-sm-block d-md-inline">Web oficial</span></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    { props.contenido }
                </div>
            </header>
        </>
    );
}

export default Encabezado;
