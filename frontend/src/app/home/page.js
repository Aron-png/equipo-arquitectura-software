'use client'
import { useRouter } from 'next/navigation'; // Importar el router para redirección
import Styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Header from '../frontpage/components/Header';
import { Carousel } from 'react-responsive-carousel';

import React, { useState } from 'react';

import Barra from '../../components/barra.jsx'

const Home = () => {
    const router = useRouter(); // Hook para manejar redirecciones


    const [imagenes, setImagenes] = useState([
        "https://via.placeholder.com/1200x300", 
        "https://via.placeholder.com/1200x300", 
        "https://via.placeholder.com/1200x300"
      ]);
 

    return (
        <div className={Styles.render}>
             <Header/>

           

           
            <div className={Styles.page}>
                <div className={Styles.fltro}>
                    <h4>Filtrar busqueda</h4>
                </div>  
                <div className={Styles.resultados}>

                </div>
                <div className={Styles.descrip}>

                </div>
            </div>


            <footer className={`${Styles.font} ${Styles['lower-banner']}`}>
          <div className={Styles.links}>
            <a href="">Trabaja con nosotros</a>
            <a href="">Términos y condiciones</a>
            <a href="">Cómo cuidamos tu privacidad</a>
            <a href="">Accesibilidad</a>
            <a href="">Ayuda</a>
          </div>
          <p>Copyright © 2024 A Tu Puerta. Todos los derechos reservados.</p>
        </footer>
                
        </div>
    );
};

export default Home;
