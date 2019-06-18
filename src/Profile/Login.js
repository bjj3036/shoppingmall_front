import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class Login extends Component {
    state = {
        account: '',
        password: '',
        goToHome: false
    }

    render() {
        if (this.state.goToHome)
            return <Redirect to='/'/>
        return (
            <div className='loginForm'>
                <div>아이디 <input value={this.state.account} onChange={this.onAccountChanged}/></div>
                <div>패스워드 <input value={this.state.password} onChange={this.onPasswordChanged}/></div>
                <button onClick={this.onLoginClick}>로그인</button>
            </div>
        );
    }

    onAccountChanged = e => this.setState({account: e.target.value})
    onPasswordChanged = e => this.setState({password: e.target.value})
    onLoginClick = async () => {
        if (!(this.state.account && this.state.password))
            return
        if (await this.props.stores.ProfileStore.login(this.state))
            this.setState({
                goToHome: true
            })
    }
}

export default Login;