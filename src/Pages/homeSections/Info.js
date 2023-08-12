import React from 'react';

const Info = (props) => {
    return (
        <section className='info'>
            <div className='info__box'>
                <div className='info__title'>
                    <h1 className='info__title--text'>{props.info.title[0]}</h1>
                    <h1 className='info__title--text'>{props.info.title[1]}</h1>
                </div>
                <p className='info__desc'>{props.info.desc}</p>
            </div>
            <img className='info__img' src={props.info.img} alt='Cossacks on horses in the field' />
        </section>
    );
}

export default Info;
