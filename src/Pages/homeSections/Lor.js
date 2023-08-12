import React, { Component } from 'react';
import Button from './Button';

class Lor extends Component {
    render() {
        return (
            <section className='lor'>
                <h2 className='lor__title'>{this.props.lor.title}</h2>
                <div className='lor__sections'>
                    {this.props.lor.sections.map((el) => (
                        <div className='lor__section' key={el.id}>
                            <div className='lor__box'>
                                <h3 className='lor__section--title'>{el.title}</h3>
                                <p className='lor__section--text'><span>{el.firstLeter}</span>{el.text}</p>
                                <Button loadingStart={this.props.loadingStart} text={this.props.lor.btn} link={el.link} />
                            </div>
                            <img className='lor__section--img' src={el.img} alt={el.alt} />
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Lor;
