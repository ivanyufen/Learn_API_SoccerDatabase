import React from 'react';
import { Link } from 'react-router-dom';

class TeamList extends React.Component {
    render() {
        const { name, logo, manager } = this.props;
        return (
            <React.Fragment>
                <div className="col-lg-4" style={{ border: "1px solid black" }}>
                    <Link to={"/" + name}>
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Logo:</strong> <img alt="" src={logo} style={{ width: "70px", height: "70px" }} /></p>
                        <p><strong>Manager:</strong> {manager}</p>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default TeamList;