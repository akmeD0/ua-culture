import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import uk from '../JSON/lang/uk.json'
import en from '../JSON/lang/en.json'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Pages/Home';
import Literature from '../Pages/Literature';
import InProgress from '../Pages/InProgress';

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
        document.querySelector('body').classList.add('lock')
        setTimeout(() => {
            this.setState({ isLoading: false })
            document.querySelector('body').classList.remove('lock')
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
                        soc={uk.social}
                        footer={uk.footer}
                        loadingStart={this.loadingStart}
                    />
                    <Routes>
                        <Route path='/' element={<Home
                            home={uk.home}
                            loadingStart={this.loadingStart}
                        />} ></Route>
                        <Route path='/literature' element={<Literature />} ></Route>
                        <Route path='/work' element={<InProgress />} />
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
                        soc={en.social}
                        footer={en.footer}
                        loadingStart={this.loadingStart}
                    />
                    <Routes>
                        <Route path='/' element={<Home
                            home={en.home}
                            loadingStart={this.loadingStart}
                        />} ></Route>
                        <Route path='/literature' element={<Literature />} ></Route>
                        <Route path='/work' element={<InProgress />} />
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
        document.querySelector('body').classList.add('lock')
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({ isLoading: false })
            document.querySelector('body').classList.remove('lock')
        }, 1000);
    }
}

export default App;