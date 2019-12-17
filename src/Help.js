import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpHost = () => <h1>Helpo the host</h1>
const HelpCustomer = () => <h1>help customer</h1>

// const Help = () => <h1>Help</h1>

function Help() {
    return (
        <div>
            <div>
                <Link to="/help/host">I am a host</Link> |
                <Link to="/help/customer">I am a customer</Link>
            </div>
            <p>An image goes here</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />
            <h3>Footer for help</h3>
        </div>
    );
}

export default Help;