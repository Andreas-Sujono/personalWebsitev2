import React,{Component} from 'react'
import './style.scss'
import logo from 'assets/Logo.png'
import divider from 'assets/footerDivider.png'

class Footer extends Component{

    state={
        email:null,
        name:null,
        message:null,
        status:null
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
        this.setState({
            email:'',
            name:'',
            message:'',
        })
      }

    render(){
        return(
            <div className="footer" id="footer">
                <img src={divider} className="divider"/>

                
                <div className="rowContainer">
                    
                    <div className="row">
                        <div className="logoLeft col-md-2 col-12">
                            <img src={logo} />
                        </div>
        
                        <div className="section1 col-md-4 col-12">
                            <h2> Contact </h2>
                            <div class="contentSection1">
                                <ul>
                                    <li> <a href="https://www.facebook.com/andreas.sujono.543">Facebook</a></li>
                                    <li><a href="https://www.instagram.com/andreassujono/">Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/in/AndreasSujono">LinkedIn</a></li>
                                    <li><a href="https://www.github.com/Andreas-Sujono">Github</a></li>
                                    <li>Email: Andr0075@e.ntu.edu.sg</li>
                                    <li> Phone Number: 83066172</li>
                                </ul>
                            </div>
                        </div>
        
                        <div className="section2 col-md-5 col-12">
                            <h2> Want to work together? </h2>
                            <div class="contentSection2">

                                <div className="footerForm">
                                    <form 
                                        onSubmit={this.submitForm}
                                        action="https://formspree.io/xdogvkwq"
                                        method="POST"
                                    >
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                placeholder="Email" 
                                                value={this.state.email}
                                                name="email"
                                                required
                                                onChange={this.handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                placeholder="Full Name" 
                                                required
                                                value={this.state.name}
                                                name="name"
                                                onChange={this.handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea 
                                                type="text" 
                                                placeholder="Message" 
                                                required
                                                value={this.state.message}
                                                name="message"
                                                onChange={this.handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                        {this.state.status == 'SUCCESS' && <p className="bg-success statusMessage">Thanks!</p>}
                                        {this.state.status == 'ERROR' && <p className="bg-danger statusMessage">There is an error! try again later</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
    
                <div className="bottomFooter" style={{textAlign:'center'}}>
                        <p>Created with &nbsp;&nbsp; <i className="fa fa-heart"></i>&nbsp;&nbsp;&nbsp;&nbsp;by Andreas Sujono</p>
                </div>
                
    
            </div>
        )
    }
    
}

export default Footer