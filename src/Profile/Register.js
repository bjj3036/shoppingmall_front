import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Register extends Component {
    state = {
        account: '',
        password: '',
        confirmPassword: '',
        username: '',
        phoneNumber: '',
        mobilePhone: '',
        zipCode: '',
        address: '',
        email: '',
        isMatchPassword: true,
        goToLogin: false
    }

    render() {
        if (this.state.goToLogin)
            return <Redirect to='/profile/login'/>
        return (
            <div>
                <div>*희망 아이디: <input value={this.state.account} onChange={this.onAccountChanged}/>(6~10자의 영문 및 숯자 가능하며
                    여백은 사용할 수 없습니다)
                </div>
                <div>*희망 패스워드: <input type='password' value={this.state.password} onChange={this.onPasswordChanged}/>(6~10자
                    이내로 영문과 숫자의 조합으로 만드세요)
                </div>
                <div>*패스워드 확인: <input type='password' value={this.state.confirmPassword}
                                     onChange={this.onConfirmPasswordChanged} required/>
                    {!this.state.isMatchPassword && '비밀번호가 일치하지 않습니다'}
                </div>
                <div>*성명: <input value={this.state.username} onChange={this.onUserNameChanged}/></div>
                <div>전화번호: <input value={this.state.phoneNumber} onChange={this.onPhoneNumberChanged}/></div>
                <div>*핸드폰: <input value={this.state.mobilePhone} onChange={this.onMobilePhoneChanged}/></div>
                <div>*우편번호: <input value={this.state.zipCode} onChange={this.onZipCodeChanged}/></div>
                <div>*주소: <input value={this.state.address} onChange={this.onAddressChanged}/></div>
                <div>*이메일 주소: <input value={this.state.email} onChange={this.onEmailChanged}/></div>
                <div>
                    회원약관
                    <div className='term-of-service'>
                        샬라샬라
                    </div>
                </div>
                <div>회원약관에
                    <button onClick={this.onSubmitClick}>동의 함</button>
                    <button>동의 안함</button>
                </div>
            </div>
        );
    }

    onSubmitClick = async () => {
        for (let key in this.state) {
            if (!this.state[key] && key !== 'phoneNumber' && key !== 'goToLogin') {
                console.log('비어있음')
                return;
            }
        }

        try {
            let response = await axios({
                url: 'http://localhost:8080/api/user/register',
                method: 'post',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                data: this.state,
                timeout: 3000
            });
            console.log(response)
            this.setState({
                goToLogin: true
            })
        } catch (e) {
            alert(e.toLocaleString())
        }
    }

    onAccountChanged = e => {
        this.setState({
            account: e.target.value.replace(/\s/g, '').trim()
        })
    }
    onPasswordChanged = e => {
        let isMatchPassword = this.state.password === e.target.value
        this.setState({
            password: e.target.value
        })
    }
    onConfirmPasswordChanged = e => {
        let isMatchPassword = this.state.password === e.target.value
        this.setState({
            confirmPassword: e.target.value,
            isMatchPassword
        })
    }
    onUserNameChanged = e => this.setState({
        username: e.target.value.replace(/\s/g, '').trim()
    })
    onPhoneNumberChanged = e => this.setState({
        phoneNumber: e.target.value
    })
    onMobilePhoneChanged = e => this.setState({
        mobilePhone: e.target.value
    })
    onZipCodeChanged = e => this.setState({
        zipCode: e.target.value
    })
    onAddressChanged = e => this.setState({
        address: e.target.value
    })
    onEmailChanged = e => this.setState({
        email: e.target.value
    })
}

export default Register;