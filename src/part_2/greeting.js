import React from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? (
    <div>
        <h1>You are now logged in!</h1>
        {props.user && <h1>Welcome back, {props.user}!</h1>}
    </div>
  ) : (
    <h1>You are not logged in, please log-in to continue!</h1>
  );
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let button = this.state.isLoggedIn ? 
                    <LogoutButton onClick={this.handleLogoutClick} /> :
                    <LoginButton onClick={this.handleLoginClick} />

        return <div>
            <Greeting user="Frank" isLoggedIn={this.state.isLoggedIn} />
            {button}
        </div>
    }
}