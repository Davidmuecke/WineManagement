import React, { Component}  from 'react';

/**
 * Component class renders customer overview screen
 */
class CustomerOverview extends Component {
    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <div className={"container"}>
                <h2>Kunden Übersicht {this.state.searchTerm}</h2>
                <form className={"form"}>
                        <div className={"row"}>
                            <div className="input-group col-md-12">
                                <input type="text" placeholder="Kunde suchen" className="form-control sm-10" id="cSuche"/>
                                <span className="input-group-btn">
                                    <button className="btn" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </span>
                            </div>
                    </div>
                </form>
                <div className={"table-responsive"}>
                    <table class="table table-striped">
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
                        <th><i class="fas fa-trash-alt"></i></th>
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
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><a href={"link.htm"}><span className="fa fa-cog"></span></a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Monsieur</td>
                        <td>Rocky</td>
                        <td>Brie 2</td>
                        <td>Baguette</td>
                        <td>12345</td>
                        <td>Eifel 3</td>
                        <td>Fondue</td>
                        <td>70562</td>
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><a href={"link.htm"}><span className="fa fa-cog"></span></a></td>
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
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><a href={"link.htm"}><span className="fa fa-cog"></span></a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <button className="btn btn-primary float-right">Neuer Kunde</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerOverview;