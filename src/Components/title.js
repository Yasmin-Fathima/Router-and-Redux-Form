import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Title extends Component{
    render(){
        return(
            <h1>
                <Link className='title' to='/'>{this.props.title}</Link>
                </h1>
        )
    }
}

export default Title;