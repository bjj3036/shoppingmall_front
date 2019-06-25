import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from 'mobx-react';

import './App.scss';

import Profile from './Profile'
import stores from './Stores'
import Home from './Home'
import CategoryView from './CategoryView'
import CategoryNav from './CategoryNav'
import ProductView from './ProductView'

class App extends Component {

    render() {
        return (
            <Provider stores={stores}>
                <BrowserRouter>
                    <header>
                        <Link to='/'>OOO 쇼핑몰</Link>
                        <div className='right'>
                            <Link to='/profile/register'>회원가입</Link>
                            /
                            <Link to='/profile/login'>로그인</Link>
                        </div>
                        <CategoryNav/>
                    </header>
                    <section>
                        <Route path='/' exact component={Home}/>
                        <Route path='/profile/:command?' exact component={Profile}/>
                        <Route path='/category/:id' exact component={CategoryView}/>
                        <Route path='/product/:id' exact component={ProductView}/>
                    </section>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
