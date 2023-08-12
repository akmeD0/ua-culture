import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './often/Logo';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='footer__cont cont'>
                <div className='footer__top'>
                    <nav className='footer__box'>
                        <p className='footer__title'>{props.footer.nav}</p>
                        <div className='footer__list'>
                            {props.nav.map((el) => (
                                <Link
                                    to={el.link} key={el.id}
                                    onClick={() => {
                                        props.loadingStart()
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                    className='footer__link'
                                >
                                    {el.text}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div className='footer__center'>
                        <Logo loadingStart={props.loadingStart} />
                        <p className='footer__text'>{props.footer.text}</p>
                    </div>
                    <div className='footer__soc footer__box'>
                        <p className='footer__title'>{props.soc.title}</p>
                        <div className='footer__list'>
                            {props.soc.links.map((el) => (
                                <a href={el.link} key={el.id} rel='noreferrer' target='_blank' className='footer__link soc'>
                                    <img src={el.ico} alt={el.name} />
                                    {el.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='line'></div>
                <p className='footer__copy'>
                    {props.footer.copy}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
