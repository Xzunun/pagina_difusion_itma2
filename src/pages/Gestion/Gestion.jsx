
import { Link } from 'react-router-dom';

import MascaraCarga from "../../components/MascaraCarga/MascaraCarga";
import Encabezado from "../../components/Encabezado/Encabezado";
import RedesSociales from "../../components/RedesSociales/RedesSociales";
import PiePagina from "../../components/PiePagina/PiePagina";
import BotonSubir from "../../components/BotonSubir/BotonSubir";

import './Gestion.css';

const ContenidoGestion = () => {
    return (
        <>
            <div className="card text-white rounded-0 overflow-hidden border-0" style={{ height: '100%' }}>
                <video className="card-img rounded-0 efecto-blur-gestion" autoPlay loop>
                    <source src="assets/video/ges.mp4" type="video/mp4" />
                </video>
                <div className="card-img-overlay d-flex align-items-center fondo-blur-gestion">
                    <div className="px-5">
                        <h5 className="card-title text-start mb-5 titulo-encabezado-gestion">Ingeniería en Gestión Empresarial</h5>
                        <p className="card-text text-end pt-5 subtitulo-encabezado-gestion">
                            Especializate con nosotros en Gestión y Desarrollo de Empresas
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Gestion = () => {
    return (
        <>
            <MascaraCarga />
            <Encabezado contenido={<ContenidoGestion />} />
            <div className="container-xxl mt-5" id="mas">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-ges"><i className="bi bi-chat-left-text-fill me-2"></i>Descripción</h1>
                            <p className="mb-4">
                                La Ingeniería en Gestión Empresarial, es una disciplina en la que se fomenta y promueve el cambio en las organizaciones, se crean nuevas dependencias y se aplican conocimientos haciendo uso de técnicas y herramientas para lograr una meta o solucionar problemas en cualquier área funcional de las organizaciones, diseñando procesos de mejor eficiencia y eficacia.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/gestion/descripcion.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/gestion/objetivo.jpg" />
                        </div>
                        <div className="col-lg-6 text-end wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-ges"><i className="bi bi-bullseye me-2"></i>Objetivo general</h1>
                            <p className="mb-4">
                                Formar profesionales que contribuyan a la gestión de empresas e innovación de procesos; así como al diseño, implementación y desarrollo de sistemas estratégicos de negocios, optimizando recursos en un entorno global, con ética y responsabilidad social.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl shadow-lg fact wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-md-12 p-5">
                            <div className="wow fadeInUp" data-wow-delay="0.1s">
                                <p className="section-title text-secondary justify-content-start"><span></span>Documentación<span></span>
                                </p>
                                <h1 className="text-start mb-5 text-ges"><i className="bi bi-table me-2"></i>Retícula</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="iframe-container">
                                        <iframe className="responsive-iframe" title="reticula gestion" src="assets/pdf/reticula_gestion.pdf" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Carreras<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-ges">Podría interesarte...</h1>
                    </div>
                    <div className="row g-4 justify-content-around">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item-gestion d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_ISIC.jpg" className="w-100 rounded" alt="" />
                                </div>
                                <h5>Ingeniería en Sistemas Computacionales</h5>
                                <Link to="/sis" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item-gestion d-flex flex-column text-center rounded shadow">
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
            <RedesSociales estilo="redes-sociales-gestion" />
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
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ges">
                                                <h5 className="fs-4 fw-light">Empresas públicas o privadas.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_02.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ges">
                                                <h5 className="fs-4 fw-light">Empresas nacionales e internacionales.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_03.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ges">
                                                <h5 className="fs-4 fw-light">Micro, pequeñas, medianas y grandes empresas.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_04.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ges">
                                                <h5 className="fs-4 fw-light">Entidades gubernamentales en sus tres niveles.</h5>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_05.jpg" className="d-block w-100 rounded" alt="..." />
                                            <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ges">
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
            <PiePagina estilo="pie-pagina-gestion" />
            <BotonSubir />
        </>

    );
}

export default Gestion;