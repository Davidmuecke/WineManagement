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
                        <div className={"col-lg-12 form-group "}>
                            <input type="text" className="form-control" id="wSuche"
                                   onChange={() => this.changeFunk(this)}/>
                        </div>
                    </div>
                </form>
                <div className={"table-striped table-bordered"}>
                    <table className={"table"}>
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
                            <th><span className="fa fa-times"></span></th>
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
                            <td><span className="fa fa-times"></span></td>
                            <td><span className="fa fa-cog"></span></td>
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
                            <td><span className="fa fa-times"></span></td>
                            <td><span className="fa fa-cog"></span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default WineOverview;