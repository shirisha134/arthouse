import React from 'react';
import NavBarItem from './navBarItem';


const navBarItems = [
    {
        id:1,
        link: "www.google.com",
        text: "Home"
    },
    {
        id:2,
        link: "https://drive.google.com/drive/folders/0B-OUv9GuiBbxcFBvMTJQR2pUQ3M",
        text: "SighUp"
    },
    {
        id:3,
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
                            return <NavBarItem id={eachItem.id} item={eachItem.text} link={eachItem.link}/>
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
