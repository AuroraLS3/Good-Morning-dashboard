import './Dashboard.css';
import React from 'react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="dashboard">
                {this.props.children}
            </section>
        )
    }
}

export default Dashboard;