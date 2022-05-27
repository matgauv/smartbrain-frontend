import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import smartBrain from './smartbrain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div class='ma4 mt3 flex justify-center'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100}} >
            <div className="Tilt-inner pa3"><img alt='logo' src={brain}/></div>
            </Tilt>
            <div class='ml3'>
                <Tilt className="Tilt br2 shadow-4" options={{ max : 25 }} style={{ height: 100, width: 700}} >
                <div className="Tilt-inner pa2 flex justify-center"><img alt='logo' src={smartBrain}/></div>
                </Tilt>
            </div>

        </div>
    );
}

export default Logo;