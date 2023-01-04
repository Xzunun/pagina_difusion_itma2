
import { useState } from 'react';

import './BotonSubir.css';

const BotonSubir = () => {
    const [visibility, setVisibility] = useState('d-none');
    window.addEventListener('scroll', () => {
        window.scrollY > 150 ? setVisibility('') : setVisibility('d-none');
    });
    return (
        <>
            <a href="#" className={visibility + " btn btn-secondary ir-arriba"} onClick={() => window.screenTop = 0}><i className="bi bi-caret-up-fill"></i></a>
        </>
    );
}

export default BotonSubir;
