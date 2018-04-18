import React, { Component}  from 'react';
import config from "../config";
import $ from "jquery";


class WineOverview extends Component {
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

    changeFunk(obj) {
        var term = document.getElementById("wSuche").value;
        //Datenbankabfrage hier
        obj.setState({
            searchTerm: term
        });
    }

    getServerData() {
        $.getJSON(config.Server.serverURL + "wine/get", "").then(response => this.setState({
            tableHeader: response.tableHeader,
            tableBody: response.tableBody
        }));
    }

    deleteWineTrigger(id) {
        $.getJSON(config.Server.serverURL + "wine/delete", {id: id.toString()}).then(() => console.log(""));
    }

    changeFunk(obj) {
        var term = document.getElementById("wSuche").value;
        //Datenbankabfrage hier
        obj.setState({
            searchString: term
        });
    }
    render() {
        let head = [];
        for (let i = 0; i < this.state.tableHeader.length; i++) {
            head.push(<th>{this.state.tableHeader[i]}</th>);
        }
        head.push(<th><i className="fas fa-trash-alt"></i></th>);
        head.push(<th><i className="fa fa-cog"></i></th>);
        let body = [];
        for (let a = 0; a < this.state.tableBody.length; a++) {
            let row = [];
            for (let b = 0; b < this.state.tableBody[a].length; b++) {
                row.push(<td>{this.state.tableBody[a][b]}</td>);
            }
            row.push(<td><i className="fas fa-trash-alt"></i></td>);
            row.push(<td className={"Link"}
                         onClick={() => this.props.setState(this.props.STATES.wineAdd, this.state.tableBody[a][0])}><i
                className="fa fa-cog"></i></td>);
            body.push(<tr onClick={() => this.deleteWineTrigger(this.state.tableBody[a][0])}>{row}</tr>);
        }
        return (
            <div className={"container"}>
                <h2>Wein Übersicht {this.state.searchTerm}</h2>
                <form className={"form"}>
                    <div className={"row"}>
                        <div className="input-group col-lg-12">
                            <input type="text" placeholder="Wein suchen" className="form-control sm-10" id="wSuche"
                                   onChange={() => this.changeFunk(this)}/>
                            <span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                        </span>
                        </div>
                    </div>
                </form>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            {head}
                        </tr>
                        </thead>
                        <tbody>
                        {body}
                        </tbody>
                    </table>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <button className="btn btn-primary float-right">Neuer Wein</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WineOverview;