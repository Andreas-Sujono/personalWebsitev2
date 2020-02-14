import React, { Component } from 'react';
import socialMediaData from './utils.js'
import './style.scss'

class SocialMedia extends Component {
    render() {
        return (
            <div className="socialMedia">
                {
                    socialMediaData.map( (item,idx) =>(
                        <a href={item.link} key={`${item.title}_${idx}`} target="_blank">
                            <div dangerouslySetInnerHTML={{__html:item.htmlEl}}/>
                        </a>
                    ) )
                }
            </div>
        );
    }
}

export default SocialMedia;