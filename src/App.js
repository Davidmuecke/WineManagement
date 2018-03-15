import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Start from './components/Start';
import WineOverview from './components/WineOverview';
import WineAdd from './components/WineAdd';
import CustomerOverview from './components/CustomerOverview';
import CustomerAdd from './components/CustomerAdd';
import SupplierOverview from './components/SupplierOverview';
import SupplierAdd from './components/SupplierAdd';
import AdministrationUser from './components/AdministrationUser';
import AdministrationBackup from './components/AdministrationBackup';
import AdministrationStats from './components/AdministrationStats';
import OrderOverview from './components/OrderOverview';
import OrderAdd from './components/OrderAdd.jsx';

class App extends Component {
    /**
     * Constructor with State ENUM
     * @param props
     */
    constructor(props) {
        super(props);
        //ENUM with states
        this.STATES = Object.freeze({"login":0, "logout":1, "start": 2,
                                    "wineOverview": 10, "wineAdd": 11,
                                    "customerOverview":20, "customerAdd":21,
                                    "supplierOverview":30, "supplierAdd":31,
                                    "administrationUser":40, "administrationBackup":41, "administrationStats":42,
                                    "orderOverview": 50, "orderAdd":51
        })
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
            case this.STATES.login:
                return <Login />;
            case this.STATES.logout:
                return <Logout />;
            case this.STATES.start:
                return <Start />;
            case this.STATES.wineOverview:
                return <WineOverview/>;
            case this.STATES.wineAdd:
                return <WineAdd/>;
            case this.STATES.customerOverview:
                return <CustomerOverview/>;
            case this.STATES.customerAdd:
                return <CustomerAdd/>;
            case this.STATES.supplierOverview:
                return <SupplierOverview/>;
            case this.STATES.supplierAdd:
                return <SupplierAdd/>;
            case this.STATES.administrationUser:
                return <AdministrationUser/>;
            case this.STATES.administrationBackup:
                return <AdministrationBackup/>;
            case this.STATES.administrationStats:
                return <AdministrationStats/>;
            case this.STATES.orderOverview:
                return <OrderOverview/>;
            case this.STATES.orderAdd:
                return <OrderAdd/>;

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
