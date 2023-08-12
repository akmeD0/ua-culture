import React from 'react';

const Burger = () => {
    return (
        <div id='burger' onClick={() => {
            if (!document.getElementById('header').classList.contains('scrolled')) {
                document.getElementById('header').classList.add('scrolled')
            }
            if (window.scrollY < 102 && document.getElementById('burger').classList.contains('active')) {
                document.getElementById('header').classList.remove('scrolled')
            }
            document.getElementById('burger').classList.toggle('active')
            document.getElementById('aside').classList.toggle('active')
            document.querySelector('body').classList.toggle('lock')
            document.getElementById('btn').classList.remove('show')
            document.getElementById('triangle').classList.remove('rotate')
        }}>
            <span></span>
        </div>
    );
}

export default Burger;
