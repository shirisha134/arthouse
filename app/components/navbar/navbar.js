import React from 'react';
import NavBarItem from './navBarItem';


const navBarItems = [
    {
        link: "www.google.com",
        text: "Home"
    },
    {
        link: "https://drive.google.com/drive/folders/0B-OUv9GuiBbxcFBvMTJQR2pUQ3M",
        text: "SighUp"
    },
    {
        link: "https://thoughtworks.jiveon.com/groups/coes",
        text: "SighIn"
    }
];

export default class NavBar extends React.Component {


    render() {
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {navBarItems.map(function (eachItem) {
                            return <NavBarItem item={eachItem.text} link={eachItem.link}/>
                        })}
                    </div>
                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>

        );
    }
}
