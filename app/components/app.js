import React from 'react';
import NavBar from './navbar/navbar';
import DashBoard from './dashBoard/dashboard';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <DashBoard/>

            </div>
        );
    }
}
