import React from 'react'
import './style.scss'
import logo from 'assets/Logo.png'
import divider from 'assets/footerDivider.png'

const Footer = (props) => {

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
                        <ul>
                            <li>You can contact my email: Andr0075@e.ntu.edu.sg</li>
                        </ul>
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

export default Footer