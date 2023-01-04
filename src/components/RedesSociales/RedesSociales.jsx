
import './RedesSociales.css';

const RedesSociales = (props) => {
    return (
        <>
            <div className={"container-fluid shadow-lg py-5 d-none d-lg-flex wow fadeInUp " + props.estilo} data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <p className="section-title text-white justify-content-center"><span></span>Redes sociales<span></span></p>
                            <h1 className="text-center text-white mb-4">Nos puedes encontrar en las siguientes plataformas</h1>
                        </div>
                    </div>
                    <div className="row row-cols-lg-4 row-cols-md-2 g-md-5 mt-5">
                        <div className="col text-center">
                            <a href="https://www.facebook.com/tecmilpaalta2" target="_blank" rel="noopener noreferrer" className="nav-link text-light"><i className="bi bi-facebook icono-red-social"></i></a>
                        </div>
                        <div className="col text-center">
                            <a href="https://twitter.com/TecNMMilpaAlta2" target="_blank" rel="noopener noreferrer" className="nav-link text-light"><i className="bi bi-twitter icono-red-social"></i></a>
                        </div>
                        <div className="col text-center">
                            <a href="https://www.youtube.com/channel/UCXJVuz9lnFc03mObS-0wYOg" target="_blank" rel="noopener noreferrer" className="nav-link text-light"><i className="bi bi-youtube icono-red-social"></i></a>
                        </div>
                        <div className="col text-center">
                            <a className="nav-link text-light" target="_blank" rel="noreferrer" href="https://github.com/itma2"><i className="bi bi-github icono-red-social"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RedesSociales;
