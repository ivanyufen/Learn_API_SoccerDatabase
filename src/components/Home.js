import React from 'react';
import axios from 'axios';
import TeamList from './TeamList';
import Spinner from './Spinner';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            teams: []
        }
    }

    componentDidMount() {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
        this.setState({
            isLoading: true
        })
        axios.get(url).then(
            (x) => {
                console.log(x.data.teams)
                this.setState({
                    teams: x.data.teams,
                    isLoading: false
                })
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    teamList() {
        return this.state.teams.map((val, i) => {
            return (
                <TeamList name={val.strTeam} logo={val.strTeamBadge} manager={val.strManager} />
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                {this.state.isLoading && <Spinner />}
                <div className="container-fluid">
                    <div className="row">
                        {this.teamList()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Home;