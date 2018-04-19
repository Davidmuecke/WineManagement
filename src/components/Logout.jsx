import React, { Component}  from 'react';


/**
 * Component class renders logout screen
 */
class Logout extends Component {
    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <div className={"container"}>
                <h1>Logout</h1>
                <p>Sie wurden erfolgreich abgemeldet!</p>
            </div>
        )
    }
}

export default Logout;