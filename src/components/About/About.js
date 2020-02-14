import React, { Component } from 'react';
import {skill,skillImage} from './utils.js'
import andreasPhoto from 'assets/Andreas.jpg'
import './style.scss'

class About extends Component {
    render() {
        return (
            <div className="about container" id="about">
                <h2>About</h2>
                <hr/>

                <div className="row">
                    <div className="leftContent col-lg-5 col- 10">
                        <img src={andreasPhoto}/>
                        <h4>About Me</h4>
                        <div className="aboutMeContent">
                            A sophomore in NTU studying Electrical and Electronic Engineering. 
                            Have a really great passion for developing innovative programs. 
                            Experienced in well-versed technology and writing code that are reliable and user-friendly. 
                            Have developed several web-based applications using Python with Django framework and built 
                            the front end using ReactJs to make a responsive single page application.
                        </div>
                    </div>
                    <div className="rightContent col-lg-7 col-10">
                        <h4>Skills</h4>
                        {
                            skill.map( (item,idx) => (
                                <div className="skillIndividual" key={`${item.name}_${idx}`}>
                                    <div className="skillTitle">{item.name}</div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar progress-bar-animated" 
                                            style={{width:`${item.value}%`}}
                                            role="progressbar" 
                                            aria-valuenow={item.value} 
                                            aria-valuemin="0" a
                                            ria-valuemax="100"
                                        />
                                    </div>
                                    <div className="skillProficiency">{item.proficiency}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="container skillImage row">
                    {
                        skillImage.map( (item,idx) => (
                            <div className="skillImageIndividual col" key={`${item.name}_${idx}`}>
                                <img src={item.image}/>
                                <h4>{item.title}</h4>
                                <div>{item.detail}</div>
                            </div>
                        ) )
                    }
                </div>
            </div>
        );
    }
}

export default About;