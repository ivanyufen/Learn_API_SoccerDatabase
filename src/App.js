import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import TeamDetail from './components/TeamDetail';


class App extends React.Component {

    render() {
        return (
            <div className="text-center my-2">
                <Link to="/"><h1>Welcome to BolaDatabase.com</h1></Link>
                {/* <button className="btn btn-primary m-2">Klik Sini</button>
                <Link to="/contact">Contact</Link> */}

                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    {/* ini artinya routing dinamis, kalo yg atas static */}
                    <Route path="/:team" component={TeamDetail} />
                </div>

            </div>
        )
    }
}


export default App;