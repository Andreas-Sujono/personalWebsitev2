import React, {Component} from 'react'

import './style.scss'

import { Link} from 'react-scroll'

class TopNav extends Component{

    render(){
        const navList = [{title:'Home', link:'firstPage'},
                        {title:'About', link:'about'},
                        {title:'Projects', link:'projects'},
                        {title:'Gallery', link:'gallery'},
                        {title:'Contact', link:'footer'},
                    ]

        return (
            <div class="topNav fluid-container" > 
                    <ul>
                        {
                        navList.map( item => (
                            <li className="collapseIndividual"> 
                                {
                                <Link
                                    activeClass="navActive"
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration= {500}
                                >
                                    {item.title}
                                </Link>
                                }
                                
                            </li>
                        ))
                        }
                    </ul> 

            </div>
        );   
    }
}

export default TopNav