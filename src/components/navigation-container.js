import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router' 

const NavigationComponent = (props) => {


    const handleSignOut = () => {
        axios.delete('https://api.devcamp.space/logout', { withCredentials: true }).then(response => {
            if (response.status === 200) {  
                props.history.push('/')
                props.handleSuccessfulLogout()
            }
            return response.data  

        }).catch(error => {
            console.log('Error signing out', error)
        })
    }

    return (


        <div className='login-logout'>


            {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut} >
                <FontAwesomeIcon icon='sign-out-alt' />
            </a> : null}
        </div>
    )
}

export default withRouter(NavigationComponent)