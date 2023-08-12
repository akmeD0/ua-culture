import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aside extends Component {
    render() {
        return (
            <aside className='aside' id='aside'>
                <div className='aside__cont'>
                    <nav className='footer__box aside__list'>
                        <p className='footer__title'>{this.props.footer.nav}</p>
                        <div className='footer__list aside__list'>
                            {this.props.nav.map((el) => (
                                <Link
                                    to={el.link} key={el.id}
                                    onClick={() => {
                                        this.props.loadingStart()
                                        document.getElementById('aside').classList.remove('active')
                                        document.getElementById('burger').classList.remove('active')
                                        document.querySelector('body').classList.remove('lock')
                                        document.getElementById('header').classList.remove('scrolled')
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                    className='footer__link'
                                >
                                    {el.text}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div className='footer__soc footer__box aside__list'>
                        <p className='footer__title'>{this.props.soc.title}</p>
                        <div className='footer__list aside__list'>
                            {this.props.soc.links.map((el) => (
                                <a href={el.link} key={el.id} rel='noreferrer' target='_blank' className='footer__link soc'>
                                    <img src={el.ico} alt={el.name} />
                                    {el.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Aside;
