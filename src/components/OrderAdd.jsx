import React, {Component} from 'react';

/**
 * Component class renders order add screen
 */
class OrderAdd extends Component {
    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <div className={"container"}>
                <h2>Neue Bestellung</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-6"}>
                            <div className="form-group">
                                <div className="input-group col-md-20">
                                    <select className="form-control" id="selectBox1" placeholder="Kunde auswählen"
                                            data-live-search="true">
                                        <option disabled selected>Kunde auswählen ...</option>
                                        <option>Armin Apfel</option>
                                        <option>Bastian Brine</option>
                                        <option>Clemens Clementine</option>
                                        <option>Daniel Dattel</option>
                                        <option>Emil Erbse</option>
                                    </select>
                                </div>
                            </div>

                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wName">Name</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="wName"/>
                                </div>
                            </div>

                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"}
                                       for="wVorname">Vorname</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="wVorname"/>
                                </div>
                            </div>

                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"}
                                       for="wName">Kundennummer</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="wKundennummer"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-3"}>
                            <div className={"form-group"}>
                                <button className="btn btn-primary btn-block">Kunde bearbeiten</button>
                            </div>
                            <div className={"form-group"}>
                                <label for="comment">Rechnungsadresse</label>
                                <textarea className="form-control textAreaOrderAdd" rows="4"
                                          id="rechnungsadresse"></textarea>
                            </div>
                        </div>

                        <div className={"col-lg-3"}>

                            <div className={"form-group "}>
                                <button className="btn btn-primary btn-block">Kunde anlegen</button>
                            </div>

                            <div className={"form-group"}>
                                <label className={"label"}>Lieferadresse</label>
                                <textarea className="form-control textAreaOrderAdd" rows="4"
                                          id="lieferadresse"></textarea>
                            </div>
                        </div>

                    </div>

                    <div className={"row"}>
                        <div className="col-lg-12">
                            <h4>Alle Weine</h4>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="input-group col-lg-12">
                            <input type="text" placeholder="Wein suchen" className="form-control sm-10" id="wName"/>
                            <span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                        </span>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-lg-12 table-responsive">
                            <table className={"table table-striped"}>
                                <thead>
                                <tr>
                                    <th>Nummer</th>
                                    <th>Name</th>
                                    <th>Winzer</th>
                                    <th>Jahrgang</th>
                                    <th>Bestand</th>
                                    <th>Einzelpreis</th>
                                    <th>Anzahl</th>
                                    <th><i className="fas fa-plus"></i></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>13571275</td>
                                    <td>Rotwein</td>
                                    <td>Werner Winzer</td>
                                    <td>1960</td>
                                    <td>2000</td>
                                    <td>5,00€</td>
                                    <td>20</td>
                                    <td><a href={"link.htm"}><i className="fas fa-plus"></i></a></td>
                                </tr>
                                <tr>
                                    <td>22273829</td>
                                    <td>Weiswein</td>
                                    <td>Wille Weiner</td>
                                    <td>1875</td>
                                    <td>10</td>
                                    <td>500,00€</td>
                                    <td>1</td>
                                    <td><a href={"link.htm"}><i className="fas fa-plus"></i></a></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-lg-12">
                            <h4>Aktuelle Bestellung</h4>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-lg-12 table-responsive">
                            <table className={"table table-striped"}>
                                <thead>
                                <tr>
                                    <th>Nummer</th>
                                    <th>Name</th>
                                    <th>Winzer</th>
                                    <th>Jahrgang</th>
                                    <th>Bestand</th>
                                    <th>Einzelpreis</th>
                                    <th>Gesamtpreis</th>
                                    <th>Anzahl</th>
                                    <th><i className="fas fa-times"></i></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>13571275</td>
                                    <td>Rotwein</td>
                                    <td>Werner Winzer</td>
                                    <td>1960</td>
                                    <td>2000</td>
                                    <td>5,00€</td>
                                    <td>100,00€</td>
                                    <td>20</td>
                                    <td><a href={"link.htm"}><i className="fas fa-times"></i></a></td>
                                </tr>
                                <tr>
                                    <td>22273829</td>
                                    <td>Weiswein</td>
                                    <td>Wille Weiner</td>
                                    <td>1875</td>
                                    <td>10</td>
                                    <td>500,00€</td>
                                    <td>1000,00€</td>
                                    <td>2</td>
                                    <td><a href={"link.htm"}><i className="fas fa-times"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><a href={"link.htm"}><i className="fas fa-times"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><a href={"link.htm"}><i className="fas fa-times"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><a href={"link.htm"}><i className="fas fa-times"></i></a></td>
                                </tr>
                                <tr>
                                    <td>Summe</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <button type="submit" className="btn btn-primary float-right">Weiter</button>
                            <button type="reset" className="btn btn-secondary float-right">Abbrechen</button>
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}

export default OrderAdd;