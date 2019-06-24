import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from 'mobx-react';

import './App.scss';

import Profile from './Profile'
import stores from './Stores'
import Home from './Home'
import CategoryView from './CategoryView'

class App extends Component {
    render() {
        return (
            <Provider stores={stores}>
                <BrowserRouter>
                    <header>
                        <Link to='/profile/register'>회원가입</Link>
                        <Link to='/profile/login'>로그인</Link>
                        <div>
                            <ul className='header-nav'>
                                <li>상의(남)</li>
                                <li>하의(남)</li>
                                <li>상의(여)</li>
                                <li>하의(여)</li>
                                <li>구두</li>
                                <li>가방</li>
                                <li>소품</li>
                            </ul>
                        </div>
                    </header>
                    <section>
                        <Route path='/' exact component={Home}/>
                        <Route path='/profile/:command?' exact component={Profile}/>
                        <Route path='/category/:id' exact component={CategoryView}/>
                    </section>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
