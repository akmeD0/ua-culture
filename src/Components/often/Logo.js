import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/static/logo.svg'

class Logo extends Component {
    render() {
        return (
            <Link onClick={() => {
                this.props.loadingStart()
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className='logo' to='/'>
                <img src={logo} alt='Go to home page' />
            </Link>
        );
    }
}

export default Logo;
