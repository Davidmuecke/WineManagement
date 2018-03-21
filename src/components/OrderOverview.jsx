import React, { Component}  from 'react';


class OrderOverview extends Component {
    render() {

        return (
            <div className={"container"}>
                <h2>Übersicht Bestellungen</h2>
                <form className={"form-horizontal"}>
                    <div class="input-group col-md-12">
                        <input type="text" placeholder="Bestellung suchen" className="form-control sm-10" id="wName"/>
                        <span class="input-group-btn">
                                    <button class="btn" type="button">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </span>
                    </div>

                    <div class="table-responsive">
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th>Nummer</th>
                                <th>Kunde</th>
                                <th>Weinsorte</th>
                                <th>Winzer</th>
                                <th>Jahrgang</th>
                                <th>Anzahl</th>
                                <th>Einzelpreis</th>
                                <th>Gesamtpreis</th>
                                <th><i class="fas fa-trash-alt"></i></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>13571275</td>
                                <td>Max Mustermann</td>
                                <td>Rotwein</td>
                                <td>Werner Winzer</td>
                                <td>1960</td>
                                <td>20</td>
                                <td>5,00€</td>
                                <td>100,00€</td>
                                <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td>23452345</td>
                                <td>Helmut Hafer</td>
                                <td>Weiswein</td>
                                <td>Wille Weiner</td>
                                <td>1875</td>
                                <td>1</td>
                                <td>500,00€</td>
                                <td>500,00€</td>
                                <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td>54236346</td>
                                <td>Gitti Gans</td>
                                <td>Portwein</td>
                                <td>Angelo Merte</td>
                                <td>2007</td>
                                <td>150</td>
                                <td>2,30€</td>
                                <td>345,00€</td>
                                <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <button className="btn btn-primary float-right">Neue Bestellung</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrderOverview;