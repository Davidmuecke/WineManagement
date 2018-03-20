import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class SupplierOverview extends Component {
    render() {
        return (
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Kundennummer</th>
                    <th scope="col">Name</th>
                    <th scope="col">Region</th>
                    <th scope="col">Land</th>
                    <th scope="col">Straße</th>
                    <th scope="col">Ort</th>
                    <th scope="col">PLZ</th>
                    <th scope="col">Bearbeiten</th>
                    <th scope="col">Loeschen</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mueller Hans</td>
                    <td>Champagne</td>
                    <td>Frankreich</td>
                    <td>Winestr. 2</td>
                    <td>Champagne</td>
                    <td>123123</td>
                    <td>Stuttgart</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default SupplierOverview;