import React from 'react';

class Spinner extends React.Component {
    render() {
        return (
            <div className="ui segment" style={{ height: "100vh" }}>
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Preparing Files</div>
                </div>
            </div>
        )
    }
}


export default Spinner;