import React, { Component } from 'react';
import { API_URL } from "../../config/config";
import axios from "axios";
import { history } from "../../App";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state ={
            username: '',
            password: '',
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        return axios({
            method: 'POST',
            url: `${API_URL}/auth/login`,
            data: {
                username: this.state.username,
                password: this.state.password,
            }
        }).then(response => {
            localStorage.setItem('userToken', JSON.stringify(response.data.token));
            history.push('/listing');
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
                <div>
                    <form className="login" onSubmit={(event) => this.onFormSubmit(event)}>
                        <h2>Log in</h2>
                        <div>username</div>
                        <input onKeyUp={(event) => this.handleUsernameChange(event)} className="login__input" type="text" />
                        <div>Password</div>
                        <input onKeyUp={(event) => this.handlePasswordChange(event)}  className="login__input" type="password" />
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    {

                    }
                </div>
            )
    }
}

export default Login;
