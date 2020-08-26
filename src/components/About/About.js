import React, { Component } from 'react';
import {skill,skillImage} from './utils.js'
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import andreasPhoto from 'assets/Andreas.jpg'
import './style.scss'

class About extends Component {

    state = {
        value :0
    }
    render() {
        return (
            <div className="about container" id="about">
                <Flip top>
                    <h2>About</h2>
                
                <hr/>
                </Flip>

                <div className="row">
                    <div className="leftContent col-lg-5 col- 10">
                        <Zoom><img src={andreasPhoto} alt="andreas"/></Zoom>
                        <LightSpeed>
                            <h4>About Me</h4>
                        </LightSpeed>
                        <Fade>
                        <div className="aboutMeContent">
                            A sophomore in NTU studying Electrical and Electronic Engineering. 
                            Have a really great passion for developing innovative programs. 
                            Experienced in well-versed technology and writing code that are reliable and user-friendly. 
                            Have developed several web-based applications using Python with Django framework and built 
                            the front end using ReactJs to make a responsive single page application.
                        </div>
                        </Fade>
                    </div>
                    <div className="rightContent col-lg-7 col-10">
                        <Fade left>
                        <h4>Skills</h4>
                        {
                            skill.map( (item,idx) => (
                                <div className="skillIndividual" key={`${item.name}_${idx}`}>
                                    
                                    <div className="skillTitle">{item.name}</div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar progress-bar-animated" 
                                            style={{
                                                width:`${item.value}% `
                                            }}
                                            role="progressbar" 
                                            aria-valuenow={item.value} 
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        />
                                    </div>
                                    <div className="skillProficiency">{item.proficiency}</div>
                                    
                                </div>
                            ))
                        }
                        </Fade>
                    </div>
                </div>

                <div className="container skillImage row">
                    {
                        skillImage.map( (item,idx) => (
                            <div className="skillImageIndividual col" key={`${item.name}_${idx}`}>
                                <Zoom>
                                <img src={item.image} alt="skill"/>
                                <h4>{item.title}</h4>
                                <div>{item.detail}</div>
                                </Zoom>
                            </div>
                        ) )
                    }
                </div>
            </div>
        );
    }
}

export default About;