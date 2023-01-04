
const Acerca = () => {
    return (
        <>
            <div className="container-fluid" id="acerca">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de nosotros<span></span></p>
                            <h1 className="mb-5 text-success"><i className="bi bi-bullseye me-2"></i>Misión</h1>
                            <p className="mb-4">
                                Ofrecer servicios de Educación Superior Tecnológica de calidad, con cobertura nacional, pertinente y
                                equitativa, que coayude a la conformación de una sociedad justa y humana, con una perspectiva de sustentabilidad.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/fototeca/general/somos_linces_02.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/fototeca/general/somos_linces_01.png" />
                        </div>
                        <div className="col-lg-6 text-end wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de nosotros<span></span></p>
                            <h1 className="mb-5 text-success"><i className="bi bi-eye-fill me-2"></i>Visión</h1>
                            <p className="mb-4">
                                Ser una institución de Educación Superior Tecnológica de calidad, con alcance internacional y comprometida a ser
                                uno de los pilares fundamentales del desarrollo sostenido, sustentable y equitativo de la nación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Acerca;
