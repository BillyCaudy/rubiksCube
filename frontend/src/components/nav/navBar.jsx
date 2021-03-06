import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div id="loggedin-navbar-options">
                    {/* <Link to={'/Links'}>All Links</Link> */}
                    <div>
                        <Link to={'/profile-page'}>Profile</Link>
                    </div>
                    <button className="button-style-link" onClick={this.logoutUser}>Logout</button>
                    
                </div>
            );
        } else {
            return (
                <div id="loggedout-navbar-options">
                    <div>
                    <Link to={'/signup'} className="button-style-link">Signup</Link>
                    </div>
                    <div>
                    <Link to={'/login'} className="button-style-link">Login</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <Link to='/' className='logo'><h1>reAnimator</h1></Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;