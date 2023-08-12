import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import uk from '../JSON/lang/uk.json'
import en from '../JSON/lang/en.json'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Pages/Home';
import Literature from '../Pages/Literature';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: 'UK',
            isLoading: true
        }
        this.changeLang = this.changeLang.bind(this)
        this.loadingStart = this.loadingStart.bind(this)
    }
    componentDidMount() {
        if (sessionStorage.getItem('lang') === '' || !sessionStorage.getItem('lang')) {
            this.setState({
                lang: 'UK'
            })
        } else {
            this.setState({
                lang: sessionStorage.getItem('lang')
            })
        }
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000);
    }
    render() {
        if (this.state.lang === 'UK') {
            return (
                <div className='wrapper'>
                    <div className={this.state.isLoading ? 'loading' : 'loading hide'}></div>
                    <Header
                        changeLang={this.changeLang}
                        currLang={this.state.lang}
                        nav={uk.nav}
                        loadingStart={this.loadingStart}
                    />
                    <Routes>
                        <Route path='/' element={<Home info={uk.home.info} />} ></Route>
                        <Route path='/literature' element={<Literature />} ></Route>
                    </Routes>
                    <Footer
                        footer={uk.footer}
                        nav={uk.nav}
                        soc={uk.social}
                        loadingStart={this.loadingStart}
                    />
                </div>
            );
        } else if (this.state.lang === 'EN') {
            return (
                <div className='wrapper'>
                    <div className={this.state.isLoading ? 'loading' : 'loading hide'}></div>
                    <Header
                        changeLang={this.changeLang}
                        currLang={this.state.lang}
                        nav={en.nav}
                        loadingStart={this.loadingStart}
                    />
                    <Routes>
                        <Route path='/' element={<Home info={en.home.info} />} ></Route>
                        <Route path='/literature' element={<Literature />} ></Route>
                    </Routes>
                    <Footer
                        footer={en.footer}
                        nav={en.nav}
                        soc={en.social}
                        loadingStart={this.loadingStart}
                    />
                </div>
            )
        }
    }
    changeLang(e) {
        this.setState({
            lang: e
        })
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000);
        sessionStorage.setItem('lang', e)
    }
    loadingStart() {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000);
    }
}

export default App;