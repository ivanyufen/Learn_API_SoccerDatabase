import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';

class TeamDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            players: [],
            teamName: "",
            isLoading: false
        }
    }

    componentDidMount() {
        const teamName = this.props.match.params.team;
        this.setState({ teamName: teamName, isLoading: true })
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`;
        axios.get(url).then(
            (x) => {
                this.setState({
                    players: x.data.player,
                    isLoading: false
                })

            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    displayPlayer() {
        return this.state.players.map((val, i) => {
            return (
                <tr>
                    <td>{val.strPlayer}</td>
                    <td><img src={val.strCutout} alt="Player Photo" /></td>
                    <td>{val.strNationality}</td>
                    <td>{val.strPosition}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Showing you a team details of {this.state.teamName}</h1>
                {this.state.isLoading && <Spinner />}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayPlayer()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeamDetail;