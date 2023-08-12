import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link} onClick={() => {
            props.loadingStart()
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }} className='lor__btn'>
            {props.text}
            <img src='https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/static%2Farrow.svg?alt=media&token=a024754d-c93b-4aef-9243-714104b4d59a' alt='arrow' />
        </Link>
    );
}

export default Button;
