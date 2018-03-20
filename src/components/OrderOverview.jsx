import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class OrderOverview extends Component {
    render() {

        return (
            <div className={"container"}>
                <h2>Übersicht Bestellungen</h2>
                <form className={"form-horizontal"}>
                        <div class="input-group col-md-20">
                            <input type="text" placeholder="Bestellung suchen" className="form-control sm-10" id="wName" />
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
                            <th>Einzelpreis</th>
                            <th>Gesamtpreis</th>
                            <th><i class="fas fa-trash-alt"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>13571275</td><td>Max Mustermann</td><td>Rotwein</td><td>Werner Winzer</td><td>1960</td><td>5,00€</td><td>20,00€</td><td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        </tr>
                        <tr>
                            <td>13571276</td><td>Max Mustermann</td><td>Rotwein</td><td>Werner Winzer</td><td>1960</td><td>5,00€</td><td>20,00€</td><td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        </tr>
                        <tr>
                            <td>13571277</td><td>Max Mustermann</td><td>Rotwein</td><td>Werner Winzer</td><td>1960</td><td>5,00€</td><td>20,00€</td><td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>


                    <button className="btn btn-primary float-right" >Neue Bestellung</button>
                </form>
            </div>
        );
    }
}

export default OrderOverview;