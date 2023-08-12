import React from 'react';

const Lng = (props) => {
    return (
        <div className='lng' onClick={() => {
            document.getElementById('btn').classList.toggle('show')
            document.getElementById('triangle').classList.toggle('rotate')
            document.getElementById('aside').classList.remove('active')
            document.getElementById('burger').classList.remove('active')
            document.querySelector('body').classList.remove('lock')
            if (window.scrollY < 102) {
                document.getElementById('header').classList.remove('scrolled')
            }
        }}>
            <p className='lng__current'>{props.currLang}</p>
            {props.currLang === 'UK' ? (
                <button id='btn' className='lng__btn' onClick={() => {
                    props.changeLang('EN')
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>
                    EN
                </button>
            ) : (
                <button id='btn' className='lng__btn' onClick={() => {
                    props.changeLang('UK')
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>
                    UK
                </button>
            )}
            <div className='lng__triangle' id='triangle'></div>
        </div>
    );
}

export default Lng;
