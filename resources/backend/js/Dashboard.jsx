import React from 'react';
import ReactDOM from 'react-dom';

export default function Dashboard() {
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Dashboard />, document.getElementById('app'));
}
