import React, { Component}  from 'react';

/**
 * Component class renders the welcome screen
 */
class Start extends Component {
    /**
     * render HTMl Code
     * @returns html code
     */
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