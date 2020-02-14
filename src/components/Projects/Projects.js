import React, { Component } from 'react';
import Card from './Card'
import Modal from 'components/Modal'
import './style.scss'
import projectsData from './utils'

class Projects extends Component {
    state={
        modal:false,
        data:{image:null,title:null,description:null,techStack:null}
    }

    setModal = () => {
        this.setState({modal:true})
    }
    closeModal = () => {
        this.setState({modal:false})
    }
    changeModalData = (data) => {
        this.setState({data:data})
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    

    handleClickOutside = (event) => {
        if (this.refs.modal && !this.refs.modal.contains(event.target)) {
            this.closeModal()
        }
    }

    render() {
        return (
            <div className="projects" id="projects">
                <h2>Projects</h2>
                <hr/>

                <div className="content projectsRow">
                    {
                        projectsData.map( (item,idx) => (
                            <Card 
                                image={item.image} 
                                alt={item.alt} 
                                title={item.title} 
                                techStack={item.techStack} 
                                description={item.description}
                                changeModalData = {this.changeModalData}
                                setModal = {this.setModal}
                            />
                        ))
                    }
                </div>
                
                <div class="modalContainer" ref="modal">
                    {this.state.modal && 
                    <Modal 
                        {...this.state.data}
                        closeModal = {this.closeModal}
                        
                    />}
                </div>
                
            </div>
        );
    }
}

export default Projects;