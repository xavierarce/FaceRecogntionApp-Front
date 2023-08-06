import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css'
import universe from './universe.png'

const logo= ()=>{
    return(
        <div className="ma5 mt0">
            <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="Tilt br2 shadow-2" style={{ height: '120px', width: '120px'}}>
                <div className="Tilt-inner pa4"> 
                    <img className={{paddingTop:'5px'}} alt="logo" src={universe}/> 
                </div>
            </Tilt>
        </div>
    );
}

export default logo