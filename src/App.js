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
import OrderAdd from './components/OrderAdd';

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
                return <Login STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.logout:
                return <Logout STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.start:
                return <Start STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.wineOverview:
                return <WineOverview STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.wineAdd:
                return <WineAdd STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.customerOverview:
                return <CustomerOverview STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.customerAdd:
                return <CustomerAdd STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.supplierOverview:
                return <SupplierOverview STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.supplierAdd:
                return <SupplierAdd STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.administrationUser:
                return <AdministrationUser STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.administrationBackup:
                return <AdministrationBackup STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.administrationStats:
                return <AdministrationStats STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.orderOverview:
                return <OrderOverview STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.orderAdd:
                return <OrderAdd STATES={this.STATES} setState={i => this.updateState(i)}/>;

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
                <footer className="page-footer font-small mdb-color stylish-color-dark fixed-bottom">
                    <div className="footer-copyright py-3 text-center">
                        © 2018 Copyright: QuintusQuelle
                    </div>

                </footer>
            </div>
        );
    }

}

class Menu extends Component {

    render() {
        return (

            <div className="container-fluid p-0 mb-4">
                <div className={"headerImg"}>
                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className={"container"} id={"navbarContainer"}>
                        <button onClick={() => this.props.setState(this.props.STATES.start)}
                                className={"btn-link navbar-brand pl-0"}>Semsa.de
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle"  id="navbardrop"
                                        data-toggle="dropdown">
                                    Bestellungen
                                </button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.orderOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.orderAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle"  id="navbardrop"
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
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Winzer</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.supplierOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.supplierAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Kunden</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.customerOverview)}
                                            className="dropdown-item btn-link">Übersicht
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.customerAdd)}
                                            className="dropdown-item btn-link">Hinzufügen
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link btn-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Verwaltung</button>
                                <div className="dropdown-menu">
                                    <button onClick={() => this.props.setState(this.props.STATES.administrationBackup)}
                                            className="dropdown-item btn-link">Backup
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.administrationUser)}
                                            className="dropdown-item btn-link">Benutzer
                                    </button>
                                    <button onClick={() => this.props.setState(this.props.STATES.administrationStats)}
                                            className="dropdown-item btn-link">Statistik
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.logout)}
                                        className="nav-link btn-link">Abmelden
                                </button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        );
    }

}

export default App;
