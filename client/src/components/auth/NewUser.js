import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/Context';
import AuthContext from '../../../src/context/autentification/Context';

const NewAccount = (props) => {
    // get values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, userRegistration } = authContext;

    // if the user is already registered or logged in 
    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects')
        }
        if (message) {
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, authenticated, props.history])

    // Login state
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { name, email, password, confirmPassword } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // check for empty fields
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' ||
            confirmPassword.trim() === '') {
            showAlert('All fields are required.', 'alert-error');
            return;
        }

        // Password have to be minimum 6 caracters
        if (password.length < 6) {
            showAlert('Password must have 6 characters or more.', 'alert-error');
            return;
        }

        // Both passwords are identical 
        if (password !== confirmPassword) {
            showAlert('The passwords do not match.', 'alert-error');
            return;
        }
        // Passing to action (function from authState)
        userRegistration({
            name,
            email,
            password
        });
    }

    return (
        <Fragment>
            <h1 className="home-title">Hobby & Task </h1>
            <div className="user-form">
                {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>)
                    : null}
                <div className="container-form dark-shadow">
                    <h1>Make Account</h1>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="form-field">
                            <label htmlFor="email"><i class="fas fa-user"></i></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Username"
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"><i class="fas fa-envelope"></i></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Here"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password"><i class="fas fa-key"></i></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password Here"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="confirmPassword"><i class="fas fa-key"></i></label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Repeat Password Here"
                                value={confirmPassword}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-field">
                            <input type="submit" className="btn btn-primary btn-block"
                                value="Create Account" />
                        </div>
                    </form>
                    <p>Have an account?</p>
                    <Link to="/" className="get-account" >Go back to Login</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NewAccount;