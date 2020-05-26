import React from 'react';
import './seccion.css'

const Seccion = ({height, color, children}) => (
    <div className = "seccion" style = {{height}}>
        <div className = "seccion-background" style = {{backgroundColor:color}}>
        
        </div>
        <div className = "seccion-info" >
            {
                children
            } 
        </div>
    </div>
)

export default Seccion