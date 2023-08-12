import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: [
                {
                    id: '0',
                    text: 'Головна',
                    link: '/'
                },
                {
                    id: '1',
                    text: 'Література',
                    link: 'literature'
                },
                {
                    id: '2',
                    text: 'Культура',
                    link: 'culture'
                },
                {
                    id: '3',
                    text: 'Цікаві факти',
                    link: 'facts'
                },
            ]
        }
    }
    render() {
        return (
            <nav className={this.props.column ? 'nav nav__column' : 'nav'}>
                {this.props.nav.map((el) => (
                    <Link onClick={() => {
                        this.props.loadingStart()
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }} className='nav__link' to={el.link} key={el.id}>
                        {el.text}
                    </Link>
                ))}
            </nav>
        );
    }
}

export default Nav;
