
import './PiePagina.css';

const PiePagina = (props) => {
    return (
        <>
            <div className={"container-fluid text-light " + props.estilo}>
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <p className="section-title text-white h5 mb-4">Contacto<span></span></p>
                            <p><i className="bi bi-geo-alt-fill me-2"></i>Calle Guerrero Sur 171, Pueblo de San Juan Tepenahuac, Milpa Alta, Ciudad de México, C.P. 12800</p>
                            <p><i className="bi bi-telephone-fill me-2"></i>55 5844 6824 (lunes a vienes de 09:00 a 15:00 hrs)</p>
                            <p><i className="bi bi-envelope-fill me-2"></i>dir_milpaalta2@tecnm.mx</p>
                            <div className="d-flex pt-2">
                                <a href="https://www.facebook.com/tecmilpaalta2" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light boton-red-social"><i className="bi bi-facebook"></i></a>
                                <a href="https://twitter.com/TecNMMilpaAlta2" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light boton-red-social"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.youtube.com/channel/UCXJVuz9lnFc03mObS-0wYOg" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light boton-red-social"><i className="bi bi-youtube"></i></a>
                                <a href="https://github.com/itma2" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light boton-red-social"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="iframe-container w-100">
                                <iframe className="responsive-iframe w-100 rounded shadow" height="250px" title="Ubicación TecNM Campus Milpa Alta II" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7536.1324327013745!2d-98.991919!3d19.19231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96655dc58eb54b5c!2sInstituto%20Tecnol%C3%B3gico%20de%20Milpa%20Alta%20II!5e0!3m2!1ses-419!2smx!4v1652394701901!5m2!1ses-419!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PiePagina;
