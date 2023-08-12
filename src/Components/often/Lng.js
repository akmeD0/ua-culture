import React from 'react';

const Lng = (props) => {
    return (
        <div className='lng' onClick={() => {
            let btn = document.getElementById('btn')
            let triangle = document.getElementById('triangle')
            btn.classList.toggle('show')
            triangle.classList.toggle('rotate')
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
