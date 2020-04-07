import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios"

import NavigationContainer from './navigation-container';
import Auth from '../pages/auth'
import Footer from './Footer'
import '../assets/scss/main.scss'

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: 'is-loading',
            loggedInStatus: 'NOT_LOGGED_IN'

        }
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)

    }
    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: 'LOGGED_IN'
        })
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN'
        })
    }

    handleSuccessfulLogout() {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN'
        })
    }
    checkLoginStatus() {
        return axios.get('https://api.devcamp.space/logged_in', {
            withCredentials: true
        }).then(response => {
            const loggedIn = response.data.logged_in
            const loggedInStatus = this.state.loggedInStatus

            if (loggedIn && loggedInStatus === 'LOGGED_IN') {
                return loggedIn
            } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
                this.setState({
                    loggedInStatus: 'LOGGED_IN'
                })
            } else if (!loggedIn && loggedInStatus === 'LOGGED_IN') {
                this.setState({
                    loggedInStatus: 'NOT_LOGGED_IN'
                })
            }
        })
            .catch(error => {
                console.log('Error', error)
            })
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
        this.checkLoginStatus()
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { children } = this.props

        return (



            <div className={`body ${this.state.loading}`}>
                <Router>
                    <div>
                        <NavigationContainer
                            loggedInStatus={this.state.loggedInStatus}
                            handleSuccessfulLogout={this.handleSuccessfulLogout}
                        />



                        <Route
                            path='/auth'
                            render={props => (
                                <Auth
                                    {...props}
                                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                />
                            )}
                        />


                    </div>
                </Router>

                <div id="wrapper">


                    {children}
                    <Footer />
                </div>
            </div>

        )
    }
}

export default Template
