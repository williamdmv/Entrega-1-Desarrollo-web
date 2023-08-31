
import React from 'react';
import Header from '../../Components/Shared/HeaderInicio.jsx';  
import Frame from '../../Components/Shared/Footer.jsx';
import Card_1 from '../../Components/Index/CardItem-1.jsx';
import './Inicio.css';
const About = () => {
    return (
        <div>
            <Header/>
            <div className="black-background">
                <Card_1/>
            </div>
            <Frame/>
        </div>
    );
}

export default About;
