
import './Identidad.css';

const Identidad = () => {
    return (
        <>
            <div className="container-fluid shadow-lg fact wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-md-12 px-0">
                            <div className="card bg-dark text-white rounded-0">
                                <video className="card-img" autoPlay loop>
                                    <source src="assets/video/lince.mp4" type="video/mp4" />
                                </video>
                                <div className="card-img-overlay background-overlay d-flex align-items-center">
                                    <div className="px-5">
                                        <h5 className="card-title text-start mb-5 identidad-titulo"><i className="bi bi-award-fill me-3"></i>Nuestra Mascota</h5>
                                        <p className="card-text text-end pt-5 identidad-texto">
                                            El Lince es un felino que puede habitar en selvas húmedas, zonas montañosas y zonas semidesérticas
                                            así como su capacidad de adaptarse y por la tenacidad que tiene al defender su territorio es por
                                            eso que representa a la comunidad estudiantil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Identidad;
