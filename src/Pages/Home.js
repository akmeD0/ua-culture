import React, { Component } from 'react';
import Info from './homeSections/Info';
import Lor from './homeSections/Lor';

class Home extends Component {
    render() {
        return (
            <main className='main'>
                <div className='main__cont cont'>
                    <Info info={this.props.home.info} />
                    <Lor loadingStart={this.props.loadingStart} lor={this.props.home.lor} />
                    <img className='home__pic' src={this.props.home.pic} alt='Views of Kiyv with text'/>
                </div>
            </main>
        );
    }
}

export default Home;
