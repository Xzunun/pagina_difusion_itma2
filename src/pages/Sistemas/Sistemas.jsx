import  { Link } from 'react-router-dom';

import MascaraCarga from '../../components/MascaraCarga/MascaraCarga';
import Encabezado from '../../components/Encabezado/Encabezado';
import RedesSociales from '../../components/RedesSociales/RedesSociales';
import PiePagina from '../../components/PiePagina/PiePagina';
import BotonSubir from '../../components/BotonSubir/BotonSubir';

import './Sistemas.css';

const ContenidoSistemas = () => {
    return (
        <>
            <div className="card text-white rounded-0 overflow-hidden border-0" style={{ height: '100%' }}>
                <video className="card-img rounded-0 efecto-blur-sistemas" autoPlay loop>
                    <source src="assets/video/sis.mp4" type="video/mp4" />
                </video>
                <div className="card-img-overlay d-flex align-items-center fondo-blur-sistemas">
                    <div className="px-5">
                        <h5 className="card-title text-start mb-5 titulo-encabezado-sistemas">Ingeniería en Sistema Computacionales</h5>
                        <p className="card-text text-end pt-5 subtitulo-encabezado-sistemas">
                            Especializate con nosotros en Desarrollo Web Full Stack
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Sistemas = () => {
    return (
        <>
            <MascaraCarga />
            <Encabezado contenido={<ContenidoSistemas />} />
            <div className="container-fluid mt-5" id="mas">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-sis"><i className="bi bi-chat-left-text-fill me-2"></i>Descripción</h1>
                            <p className="mb-4">
                                La Ingeniería de Sistemas Computacionales es la encargada de desarrollar las aplicaciones o programas (software) basándose en estándares internacionales y en las tecnologías actuales sobre cómputo, microprocesadores y que son de mucha utilidad para el mundo.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/sistemas/descripcion.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/sistemas/objetivo.jpg" />
                        </div>
                        <div className="col-lg-6 text-end wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-sis"><i className="bi bi-bullseye me-2"></i>Objetivo general</h1>
                            <p className="mb-4">
                                Formar profesionistas líderes con visión estratégica y amplio sentido ético; capaz de diseñar, desarrollar, implementar y administrar tecnología computacional para aportar soluciones innovadoras en beneficio de la sociedad; en un contexto global, multidisciplinario y sostenible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid shadow-lg fact wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-md-12 p-5">
                            <div className="wow fadeInUp" data-wow-delay="0.1s">
                                <p className="section-title text-secondary justify-content-start"><span></span>Documentación<span></span>
                                </p>
                                <h1 className="text-start mb-5 text-sis"><i className="bi bi-table me-2"></i>Retícula</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="iframe-container">
                                        <iframe className="responsive-iframe" title="reticula gestion" src="assets/pdf/reticula_sistemas.pdf" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Carreras<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-sis">Podría interesarte...</h1>
                    </div>
                    <div className="row g-4 justify-content-around">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item-sistemas d-flex flex-column text-center rounded shadow card-sis">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_IGE.jpg" className="w-100 rounded" alt="" />
                                </div>
                                <h5>Ingeniería en Gestión Empresarial</h5>
                                <Link to="/ges" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item-sistemas d-flex flex-column text-center rounded shadow card-sis">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_IIND.jpg" className="w-100 rounded" alt="" />
                                </div>
                                <h5>Ingeniería Industrial</h5>
                                <Link to="/ind" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RedesSociales estilo="redes-sociales-sistemas" />
            <div className="container-fluid py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Areas de oportunidad<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-secondary">Titulate y desenvuelvete en areas como:</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                            <div id="carouselExampleCaptions" className="carousel slide shadow-lg" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/img/sistemas/oportunidad_01.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-sis">
                                                <h5 className="fs-4 fw-light">Empresas públicas o privadas.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_02.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-sis">
                                                <h5 className="fs-4 fw-light">Empresas nacionales e internacionales.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_03.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-sis">
                                                <h5 className="fs-4 fw-light">Micro, pequeñas, medianas y grandes empresas.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_04.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-sis">
                                                <h5 className="fs-4 fw-light">Entidades gubernamentales en sus tres niveles.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_05.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-sis">
                                                <h5 className="fs-4 fw-light">Desarrollo de su propia empresa.</h5>
                                            </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina estilo="pie-pagina-sistemas" />
            <BotonSubir />
        </>
    );
}

export default Sistemas;