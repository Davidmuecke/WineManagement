import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    /**
     * Constructor with State ENUM
     * @param props
     */
    constructor(props) {
        super(props);
        //ENUM with states
        this.STATES = Object.freeze({"start": 1, "wineOverview": 2, "wineAdd": 3})
        this.state = {
            screen: this.STATES.start,
            login: false
        }
    }

    /**
     * Function to update state from underling components
     * @param state
     */
    updateState(state) {
        this.setState({
            screen: state,
            login: this.state.login
        });
    }

    /**
     *
     * @returns {string} actual component
     */
    returnState() {
        switch (this.state.screen) {
            case this.STATES.start:
                return <Start name={"einszweidrei!"}/>;

            case this.STATES.wineAdd:
                return <WineAdd/>;

            case this.STATES.wineOverview:
                return <WineOverview/>;
            default:
                return "FALSE STATE!";
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Menu STATES={this.STATES} wert={"echo"} setState={i => this.updateState(i)}/>
                </header>
                <main>
                    {this.returnState()}
                </main>
            </div>
        );
    }

}

class WineAdd extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Wein hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className="form-group">
                                <label className={"control-label sm-2"} for="wName">Name</label>
                                <input type="text" className="form-control sm-10" id="wName" />
                            </div>
                            <div className="form-group">
                                <label for="wJahrgang">Jahrgang</label>
                                <input type="number" className="form-control" id="wJahrgang" />
                            </div>
                            <div className="form-group">
                                <label for="wMenge">Menge</label>
                                <input type="number" className="form-control" id="wMenge" />
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wName">Name</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="wName" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wJahrgang">Jahrgang</label>
                                <div className={"col-sm-9"}>
                                    <input type="number" className="form-control sm-10" id="wJahrgang" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wMenge">Liefermenge</label>
                                <div className={"col-sm-9"}>
                                    <input type="number" className="form-control sm-10" id="wMenge" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wLieferdatum">Lieferdatum</label>
                                <div className={"col-sm-9"}>
                                    <input type="date" className="form-control sm-10" id="wLieferdatum" />
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            drei
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

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

class Menu extends Component {

    render() {
        return (
            <div className="container-fluid p-0 mb-4">
                <h1>Semsabums!!</h1>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className={"container"}>
                        <button onClick={() => this.props.setState(this.props.STATES.start)}
                                className={"btn-link navbar-brand pl-0"}>Semsa.de
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" href="#" id="navbardrop"
                                        data-toggle="dropdown">
                                    Bestellungen
                                </button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.wineOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                    <button className="dropdown-item btn-link">Link 3</button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" href="#" id="navbardrop"
                                        data-toggle="dropdown">
                                    Wein
                                </button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.wineOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                    <button className="dropdown-item btn-link">Link4</button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Winzer</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.wineOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                    <button className="dropdown-item btn-link">Link 3</button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Kunden</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.wineOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                    <button className="dropdown-item btn-link">Link 3</button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Verwaltung</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.wineOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                    <button className="dropdown-item btn-link">Link 3</button>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button className="btn-link nav-link">Abmelden</button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        );
    }

}

export default App;
