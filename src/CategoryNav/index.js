import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import './index.scss'

class Index extends Component {
    state = {
        categorys: []
    }

    async componentDidMount() {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/category',
                method: 'get',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                timeout: 3000
            });
            if (response.data) {
                this.setState({categorys: response.data})
            }
        } catch (e) {
            alert(e.toLocaleString())
        }
    }

    render() {
        return (
            <div>
                <ul className='header-nav'>
                    {this.state.categorys.map(e => (<li key={e.id}>
                        <Link to={'/category/' + e.id}>{e.category_name}</Link>
                    </li>))}
                </ul>
            </div>
        );
    }
}

export default Index;