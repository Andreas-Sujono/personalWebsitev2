import React, { Component } from 'react';
import Card from './Card'
import './style.scss'
import projectsData from './utils'

class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <h2>Projects</h2>
                <hr/>

                <div className="content row">
                    {
                        projectsData.map( (item,idx) => (
                            <Card image={item.image} alt={item.alt} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Projects;