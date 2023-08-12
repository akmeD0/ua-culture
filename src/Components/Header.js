import React, { Component } from 'react';
import Logo from './often/Logo';
import Nav from './often/Nav';
import Lng from './often/Lng';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.scrollChange = this.scrollChange.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollChange);
        this.scrollChange()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollChange)
    }
    render() {
        return (
            <header className='header' id='header'>
                <div className='cont header__cont'>
                    <Logo loadingStart={this.props.loadingStart} />
                    <div className='header__right'>
                        <Nav
                            column={false}
                            nav={this.props.nav}
                            loadingStart={this.props.loadingStart}
                        />
                        <Lng currLang={this.props.currLang} changeLang={this.props.changeLang} />
                    </div>
                </div>
            </header>
        );
    }
    scrollChange() {
        console.log(window.scrollY)
        if (window.scrollY >= 102) {
            document.getElementById('header').classList.add('scrolled')
        }
        else {
            document.getElementById('header').classList.remove('scrolled')
        }
    }
}