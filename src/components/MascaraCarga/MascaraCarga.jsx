
import { useState, useEffect } from 'react';

import './MascaraCarga.css';

const MascaraCarga = () => {
    const [mostrar, setMostrar] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setMostrar(mostrar => mostrar = 'd-none');
        }, 1000);
    });
    return (
        <>
            <div className={mostrar + " bg-success position-fixed translate-middle w-100 vh-100 d-flex top-50 start-50 align-items-center justify-content-center contenedor-spinner"}>
                <div className="text-center">
                    <img src="assets/img/logotipos/itma2.png" className="d-block mb-5" alt="Cargando..." />
                    <div className="spinner-border text-white spinner" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MascaraCarga;
