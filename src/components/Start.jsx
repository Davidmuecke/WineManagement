import React, { Component}  from 'react';


class Start extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Willkommen bei Semsa!</h2>
                {this.props.name}
            </div>
        );
    }
}

export default Start;