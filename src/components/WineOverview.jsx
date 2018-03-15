import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class WineOverview extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>WineOverview!</h2>
                {this.props.name}
            </div>
        );
    }
}

export default WineOverview;