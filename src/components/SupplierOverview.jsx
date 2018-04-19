import React, { Component}  from 'react';
import config from "../config";
import $ from "jquery";


class SupplierOverview extends Component {
    /**
     * The app state includes
     * String searchString - current search string
     * Array[] tableHeader - contains all table header fields
     * Array[][] tableBody - two dimensional array contains table body
     */
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

    /**
     * react on changes to the input field and update the state with the matching suppliers
     * from the server
     */
    changeFunc() {

        var term = document.getElementById("wSuche").value;
        if (term === null || term === "") {
            this.getServerData();
        } else {
            $.getJSON(config.Server.serverURL + "supplier/search", {query: term}).then(response => this.setState({
                tableHeader: response.tableHeader,
                tableBody: response.tableBody,
                searchString: term
            }));
        }
    }

    /**
     * Get all saved suppliers from the server and update the table
     */
    getServerData() {
        $.getJSON(config.Server.serverURL + "supplier/get", "").then(response => this.setState({
            tableHeader: response.tableHeader,
            tableBody: response.tableBody
        }));
    }

    /**
     * delete supplier from server database
     * @param id ID of the supplier, which should be deleted
     */
    deleteSupplierTrigger(id) {
        $.getJSON(config.Server.serverURL + "supplier/delete", {id: id.toString()}).then((response) => {
            console.log(console.log(response.result));
            if (!response.result) {
                window.alert("Winzer kann nicht gelöscht werden!");
            }
            this.changeFunc();
        });
    }
    render() {
        //generate table head
        let head = [];
        for (let i = 0; i < this.state.tableHeader.length; i++) {
            head.push(<th>{this.state.tableHeader[i]}</th>);
        }
        head.push(<th><i className="fas fa-trash-alt"></i></th>);
        head.push(<th><i className="fa fa-cog"></i></th>);
        //generate table body
        let body = [];
        for (let a = 0; a < this.state.tableBody.length; a++) {
            let row = [];
            for (let b = 0; b < this.state.tableBody[a].length; b++) {
                row.push(<td>{this.state.tableBody[a][b]}</td>);
            }
            row.push(<td onClick={() => this.deleteSupplierTrigger(this.state.tableBody[a][0])}><i
                className="fas fa-trash-alt"></i></td>);
            row.push(<td className={"Link"}
                         onClick={() => this.props.setState(this.props.STATES.supplierAdd, this.state.tableBody[a][0])}>
                <i
                    className="fa fa-cog"></i></td>);
            body.push(<tr>{row}</tr>);
        }

        //render HTML component
        return (
            <div className={"container"}>
                <h2>Winzer Übersicht {this.state.searchTerm}</h2>
                <form className={"form"}>
                    <div className={"row"}>
                        <div className="input-group col-md-12">
                            <input type="text" onChange={() => this.changeFunc(this)} placeholder="Winzer suchen"
                                   className="form-control sm-10" id="wSuche"/>
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
                        <button onClick={() => this.props.setState(this.props.STATES.supplierAdd)}
                                className="btn btn-primary float-right">Neuer Winzer
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SupplierOverview;