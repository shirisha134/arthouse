import React from 'react';

export default class NavBarItem extends React.Component {
    render() {
        return (
            <button type="button" className=" navBarItem btn btn-default navbar-btn">{this.props.item}<a href="https://www.google.co.in" className="navbar-link"/></button>
        );
    }

}