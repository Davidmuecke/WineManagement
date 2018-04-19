import React, {Component} from 'react';
import config from "../config";
import $ from "jquery";

/**
 * Class displays the WineOverview React Component which displays
 * all wines and offers a delete and update functionality
 */
class WineOverview extends Component {
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
     * react on changes to the input field and update the state with the matching wines
     * from the server
     */
    changeFunk() {

        var term = document.getElementById("wSuche").value;
        if (term === null || term === "") {
            this.getServerData();
        } else {
            $.getJSON(config.Server.serverURL + "wine/search", {query: term}).then(response => this.setState({
                tableHeader: response.tableHeader,
                tableBody: response.tableBody,
                searchString: term
            }));
        }
    }

    /**
     * Get all saved wines from the server and update the table
     */
    getServerData() {
        $.getJSON(config.Server.serverURL + "wine/get", "").then(response => this.setState({
            tableHeader: response.tableHeader,
            tableBody: response.tableBody
        }));
    }

    /**
     * delete wine from server database
     * @param id ID of the wine, which should be deleted
     */
    deleteWineTrigger(id) {
        $.getJSON(config.Server.serverURL + "wine/delete", {id: id.toString()}).then((response) => {
            console.log(console.log(response.result));
            if (!response.result) {
                window.alert("Wein kann nicht gelöscht werden!");
            }
            this.changeFunk();
        });
    }

    /**
     * Render React Component
     * @returns  html code
     */
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
            row.push(<td onClick={() => this.deleteWineTrigger(this.state.tableBody[a][0])}><i
                className="fas fa-trash-alt"></i></td>);
            row.push(<td className={"Link"}
                         onClick={() => this.props.setState(this.props.STATES.wineAdd, this.state.tableBody[a][0])}>
                <i className="fa fa-cog"></i></td>);
            body.push(<tr>{row}</tr>);
        }
        //return HTML code
        return (
            <div className={"container"}>
                <h2>Wein Übersicht</h2>
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
                        <button onClick={() => this.props.setState(this.props.STATES.wineAdd)}
                                className="btn btn-primary float-right">Neuer Wein
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WineOverview;