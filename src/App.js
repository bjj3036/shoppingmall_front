import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from 'mobx-react';

import './App.scss';

import Profile from './Profile'
import stores from './Stores'

class App extends Component {
    state = {
        location: 0,
    };

    render() {
        return (
            <Provider stores={stores}>
                <BrowserRouter>
                    <header>
                        <Link to='/profile/register'>회원가입</Link>
                        <Link to='/profile/login'>로그인</Link>
                    </header>
                    <section>
                        <Route path='/profile/:command?' exact component={Profile}/>
                    </section>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
