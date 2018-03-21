import React, { Component}  from 'react';


class WineOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    changeFunk(obj) {
        var term = document.getElementById("wSuche").value;
        //Datenbankabfrage hier
        obj.setState({
            searchTerm: term
        });
    }
    render() {
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
                            <th>Nummer</th>
                            <th>Name</th>
                            <th>Jahrgang</th>
                            <th>Bestand</th>
                            <th>Lieferant</th>
                            <th>Einkaufspreis</th>
                            <th>Verkaufspreis</th>
                            <th>Anbauort</th>
                            <th>Lagerort</th>
                            <th><span className="fas fa-trash-alt"></span></th>
                            <th><span className="fa fa-cog"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1234567</td>
                            <td>Kaiserwein</td>
                            <td>1918</td>
                            <td>3</td>
                            <td>250.00€</td>
                            <td>399.99€</td>
                            <td>Prinzen Winzer</td>
                            <td>Reingau</td>
                            <td>Rothebühlplatz 41</td>
                            <td><a href={"link.html"}><span className="fas fa-trash-alt"></span></a></td>
                            <td><a href={"link.html"}><span className="fa fa-cog"></span></a></td>
                        </tr>
                        <tr>
                            <td>1234599</td>
                            <td>Winterwein</td>
                            <td>2017</td>
                            <td>30</td>
                            <td>14.23€</td>
                            <td>19.99€</td>
                            <td>Carmen W.</td>
                            <td>Stuttgart</td>
                            <td>Rothebühlplatz 41</td>
                            <td><a href={"link.html"}><span className="fas fa-trash-alt"></span></a></td>
                            <td><a href={"link.html"}><span className="fa fa-cog"></span></a></td>
                        </tr>
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