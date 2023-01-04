
import MascaraCarga from '../../components/MascaraCarga/MascaraCarga';
import Encabezado from '../../components/Encabezado/Encabezado';
import Acerca from '../../components/Acerca/Acerca';
import Identidad from '../../components/Identidad/Identidad';
import OfertaEducativa from '../../components/OfertaEducativa/OfertaEducativa';
import RedesSociales from '../../components/RedesSociales/RedesSociales';
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos';
import PiePagina from '../../components/PiePagina/PiePagina';
import BotonSubir from '../../components/BotonSubir/BotonSubir';

const ContenidoInicio = () => {
    return (
        <>
            <div className="container-fluid bg-success encabezado-contenido">
                <div className="container px-lg-5 overflow-hidden">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">TecNM<br />Campus Milpa Alta II</h1>
                            <p className="text-white pb-3 animated slideInDown">
                                Es un plantel con 12 años de
                                experiencia dentro del sistema educativo implementado en la CDMX por la entonces
                                Dirección General de Educación Superior Tecnológica (DGEST).
                            </p>
                            <a href="#acerca" className="btn btn-light text-success py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"><i className="bi bi-book-half me-2"></i>Leer más</a>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="assets/img/logotipos/itma2.png" alt="Cargando..." height="300px" className="animated zoomIn" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Inicio = () => {
    return (
        <>
            <MascaraCarga />
            <Encabezado contenido={<ContenidoInicio />} />
            <Acerca />
            <Identidad />
            <OfertaEducativa />
            <RedesSociales estilo="redes-sociales-inicio" />
            <QuienesSomos />
            <PiePagina estilo="pie-pagina-inicio" />
            <BotonSubir />
        </>
    );
}

export default Inicio;
