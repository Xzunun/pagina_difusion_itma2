
import { Link } from 'react-router-dom';

import './OfertaEducativa.css';

const OfertaEducativa = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Carreras<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-success">¿Cuál es nuestra oferta educativa?</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item-inicio d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_IGE.jpg" className="w-100 rounded" alt="Cargando..." />
                                </div>
                                <h5>Ingeniería en Gestión Empresarial</h5>
                                <Link to="/ges" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item-inicio d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_IIND.jpg" className="w-100 rounded" alt="Cargando..." />
                                </div>
                                <h5>Ingeniería Industrial</h5>
                                <Link to="/ind" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item-inicio d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_ISIC.jpg" className="w-100 rounded" alt="Cargando..." />
                                </div>
                                <h5>Ingeniería en Sistema Computacionales</h5>
                                <Link to="/sis" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfertaEducativa;
