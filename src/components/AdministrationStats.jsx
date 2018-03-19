import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class AdministrationStats extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Statistiken</h2>
                <form className={"form-horizontal form-stats"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <label className={"col-lg-3"}>Laufende Bestellungen: </label>
                            <label className={"col-lg-3"}>123</label>
                            <label className={"col-lg-3"}>Weine: </label>
                            <label className={"col-lg-3"}>123</label>
                            <label className={"col-lg-3"}>Abgeschlossene Bestellungen: </label>
                            <label className={"col-lg-3"}>456</label>
                            <label className={"col-lg-3"}>Winzer:</label>
                            <label className={"col-lg-3"}>456</label>
                            <label className={"col-lg-3"}>Stornierte Bestellungen: </label>
                            <label className={"col-lg-3"}>789 </label>
                            <label className={"col-lg-3"}>Lieferanten: </label>
                            <label className={"col-lg-3"}>789</label>
                        </div>
                    </div>
                </form>

                <h2>Nicht mehr auf Lager</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Winzer</th>
                                    <th>Jahrgang</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>000</td>
                                    <td>Vodka</td>
                                    <td>Grey Goose</td>
                                    <td>2017</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>Captain Jack Daniels</td>
                                    <td>Mila Kunis</td>
                                    <td>1983</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Sparrow</td>
                                    <td>Black Pearl</td>
                                    <td>1975</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdministrationStats;