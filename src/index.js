
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Inicio from './pages/Inicio/Inicio';
import Sistemas from './pages/Sistemas/Sistemas';
import Gestion from './pages/Gestion/Gestion';
import Industrial from './pages/Industrial/Industrial';

const root = createRoot(document.querySelector('#root'));
root.render(
    <BrowserRouter basename="https://xzunun.online/">
        <Routes>
            <Route index element={<Inicio />} />
            <Route path="/sis" element={<Sistemas />} />
            <Route path="/ges" element={<Gestion />} />
            <Route path="/ind" element={<Industrial />} />
        </Routes>
    </BrowserRouter>
);
