import React, { Component}  from 'react';
import $ from 'jquery';
import config from "../config";

class OrderOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
            tableHeader: [],
            tableBody: [],
            page: 1
        }
        this.getServerData();
    }

    getServerData() {
        $.getJSON(config.Server.serverURL + "wine/search", "").then(response => this.setState({
            tableHeader: response.tableHeader,
            tableBody: response.tableBody
        }));
    }
    render() {
        let head = [];
        for (let i = 0; i < this.state.tableHeader.length; i++) {
            head.push(<th>{this.state.tableHeader[i]}</th>);
        }
        head.push(<th><i className="fas fa-trash-alt"></i></th>);
        let body = [];
        for (let a = 0; a < this.state.tableBody.length; a++) {
            let row = [];
            for (let b = 0; b < this.state.tableBody[a].length; b++) {
                row.push(<td>{this.state.tableBody[a][b]}</td>);
            }
            row.push(<td><a href={"link.htm"}><i className="fas fa-trash-alt"></i></a></td>);
            body.push(<tr>{row}</tr>);
        }
        return (
            <div className={"container"}>
                <h2>Übersicht Bestellungen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className="input-group col-md-12">
                        <input type="text" placeholder="Bestellung suchen" className="form-control sm-10" id="wName"/>
                            <span className="input-group-btn">
                                    <button className="btn" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </span>
                    </div>
                    </div>
                    <div className="table-responsive">
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                {head}
                            </tr>
                            </thead>
                            <tbody>
                            {body}
                            <tr>
                                <td>54236346</td>
                                <td>Gitti Gans</td>
                                <td>Portwein</td>
                                <td>Angelo Merte</td>
                                <td>2007</td>
                                <td>150</td>
                                <td>2,30€</td>
                                <td>345,00€</td>
                                <td><a href={"link.htm"}><i className="fas fa-trash-alt"></i></a></td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <button className="btn btn-primary float-right"
                                    onClick={() => this.props.setState(this.props.STATES.orderAdd)}>Neue Bestellung
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrderOverview;