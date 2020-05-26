import React from 'react';
import './banner.css';
import Logo from '../../../../../assets/img/logo.png';
import F1 from '../../../../../assets/img/dap.png';
import F2 from '../../../../../assets/img/dep.jpg';
import F3 from '../../../../../assets/img/dop.jpg';
import B1 from '../../../../../assets/img/google.png';
import B2 from '../../../../../assets/img/facebook.png';
import Seccion from '../Seccion/Seccion'

const Banner = () => (
    <header className="banner">
      <div className= "seccion1">      
        <Seccion color = '#658D6D' height = '15%' >
          <div className = "container-text">
          <h1>
            "La herramienta #1 para abogados del momento"
          </h1>
          <h1 className = "container-text-autor">
            -Wichai Thogthan  
          </h1>
          </div> 
        </Seccion> 

        <Seccion color = '#F1E8E8' height = '50%' >
          <div className = "contenedor-logo">
            <div>
                <img className = "logo" src = {Logo}/>
            </div>
          </div>       
        </Seccion>

      
        <Seccion  color = '#658D6D' height = '35%' >
         <div class = "contenedor-img">
            <div>
              <img class = "image" src = {F3}/>
              <span>Organiza tus <br></br> expedientes</span> 
            </div>

            <div>
              <img class = "image" src = {F2}/>
              <span>No te pierdas<br></br> ninguna audiencia</span>
            </div>

            <div>
              <img class = "image" src = {F1}/>
              <span>Haz que se<br></br> cumpla la ley</span>
            </div>
          </div>     
        </Seccion>  
      </div>
    <div className = "seccion2">
    
    </div>  
    <div className= "seccion2-info">
         <div className ="seccion2-container">
          <div className = "container-promo">
            <h1 className= "promo">Estar organizado en el juzgado, jamas fue tan facil</h1>
            <h1 className= "promo">¿Que esperas?</h1>
          </div>
          
          <button type="submit" class="botton0"><b>Iniciar Sesión</b></button>      
          <div className="buttons-container">
          <button type="submit" class="botton1"><img class="img" src={B1}/>con <b>Google</b></button>
          <button type="submit" class="botton2"><img class="img" src={B2}/>con <b>Facebook</b></button>
          </div>       
        </div>         
    </div>
  </header>
);

export default Banner;
