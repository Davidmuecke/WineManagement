import React, { Component}  from 'react';


class CustomerOverview extends Component {
    render() {
        return (
            <div className={"container"}>
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
                        <th scope="col">Bearbeiten</th>
                        <th scope="col">Loeschen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mueller</td>
                        <td>Klaus</td>
                        <td>Wilhelmstr. 2</td>
                        <td>Stuttgart</td>
                        <td>70562</td>
                        <td>Wilhelmstr. 2</td>
                        <td>Stuttgart</td>
                        <td>70562</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerOverview;