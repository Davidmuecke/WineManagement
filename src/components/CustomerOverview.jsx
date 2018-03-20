import React, { Component}  from 'react';


class CustomerOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    changeFunk(obj) {
        var term = document.getElementById("cSuche").value;
        //Datenbankabfrage hier
        obj.setState({
            searchTerm: term
        });
    }
    render() {
        return (
            <div className={"container"}>
                <h2>Kunden Übersicht {this.state.searchTerm}</h2>
                <form className={"form"}>
                    <div className={"row"}>
                        <div className={"col-lg-12 form-group "}>
                            <input type="text" className="form-control" id="cSuche"
                                   onChange={() => this.changeFunk(this)}/>
                        </div>
                    </div>
                </form>
                <div className={"table-striped table-bordered"}>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Kundennummer</th>
                        <th scope="col">Name</th>
                        <th scope="col">Vorname</th>
                        <th scope="col">Lieferstr.</th>
                        <th scope="col">Lieferort</th>
                        <th scope="col">Liefer-PLZ</th>
                        <th scope="col">Rechnungsstr.</th>
                        <th scope="col">Rechnungsort</th>
                        <th scope="col">Rechnungs-PLZ</th>
                        <th><span className="fa fa-times"></span></th>
                        <th><span className="fa fa-cog"></span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mueller</td>
                        <td>Klaus</td>
                        <td>Wilstr. 2</td>
                        <td>Stuttgart</td>
                        <td>70562</td>
                        <td>Wilstr. 2</td>
                        <td>Stuttgart</td>
                        <td>70562</td>
                        <th><span className="fa fa-times"></span></th>
                        <th><span className="fa fa-cog"></span></th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Monsieur</td>
                        <td>Rocky</td>
                        <td>Frommage 4</td>
                        <td>Baguette</td>
                        <td>12345</td>
                        <td>Eifel 3</td>
                        <td>Fondue</td>
                        <td>70562</td>
                        <th><span className="fa fa-times"></span></th>
                        <th><span className="fa fa-cog"></span></th>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sarkozy</td>
                        <td>Silvio</td>
                        <td>Vino 4</td>
                        <td>Milano</td>
                        <td>3453</td>
                        <td>Vino 4</td>
                        <td>Milano</td>
                        <td>3453</td>
                        <th><span className="fa fa-times"></span></th>
                        <th><span className="fa fa-cog"></span></th>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default CustomerOverview;