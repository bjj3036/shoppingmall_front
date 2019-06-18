import React, {Component} from 'react';
import Register from './Register'
import Login from './Login'

import './index.scss'

class Index extends Component {
    render() {
        if (this.props.match) {
            if (this.props.match.params.command === 'register')
                return <Register/>
            if (this.props.match.params.command === 'login')
                return <Login/>
        }
        return (
            <div>

            </div>
        );
    }
}

export default Index;