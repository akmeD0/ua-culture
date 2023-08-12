import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <main className='main'>
                <div className='main__cont cont'>
                    <section className='info'>
                        <div className='info__box'>
                            <div className='info__title'>
                                <h1 className='info__title--text'>{this.props.info.title[0]}</h1>
                                <h1 className='info__title--text'>{this.props.info.title[1]}</h1>
                            </div>
                            <p className='info__desc'>{this.props.info.desc}</p>
                        </div>
                        <img className='info__img' src={this.props.info.img} alt='Cossacks on horses in the field'/>
                    </section>
                </div>
            </main>
        );
    }
}

export default Home;
