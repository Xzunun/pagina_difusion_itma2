
const QuienesSomos = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>¿Quiénes somos?<span></span></p>
                        <h1 className="text-center mb-5 text-secondary">¡Somos TecNM!</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="shadow-lg rounded">
                                <div className="text-center border-bottom p-4">
                                    <div className="iframe-container">
                                        <iframe className="responsive-iframe" width="100%" height="400px" src="https://www.youtube.com/embed/1fysHX-IgHo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a href="https://www.tecnm.mx/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary me-2"><i className="bi bi-globe"></i></a>
                                    <a href="https://www.facebook.com/SomosTecNM" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary me-2"><i className="bi bi-facebook"></i></a>
                                    <a href="https://twitter.com/TecNM_MX" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary me-2"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.youtube.com/c/TecNMMXMexico" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuienesSomos;
