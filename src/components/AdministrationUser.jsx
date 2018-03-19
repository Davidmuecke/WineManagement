import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class AdministrationUser extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Benutzer anlegen/ändern</h2>
                <form className={"form-horizontal form-user"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className="form-group">
                                <label className={"control-label sm-2"} for="bName">Name</label>
                                <input type="text" className="form-control sm-10" id="bName" placeholder={"Mustermann"} />
                            </div>
                            <div className="form-group">
                                <label for="bVorname">Vorname</label>
                                <input type="text" className="form-control" id="bVorname" placeholder={"Max"}/>
                            </div>
                            <div className="form-group">
                                <label for="rolle">Rolle</label>
                                <select class="form-control" id="rolle">
                                    <option>Benutzer</option>
                                    <option>Administrator</option>
                                </select>
                            </div>
                        </div>
                        <div className={"col-lg-8"}/>
                        <div className={"col-lg-8"}/>
                        <div className={"col-lg-4"}>
                            <button type="submit" className="btn btn-primary btn-user-abbrechen">Abbrechen</button>
                            <button type="submit" className="btn btn-primary">Speichern</button>
                        </div>
                    </div>
                </form>

                <h2>Vorhandene Benutzer</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <input class="form-control" type="search" placeholder={"Benutzer suchen..."} id="example-search-input"/>
                        </div>
                        <div className={"col-lg-12"}>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Vorname</th>
                                    <th>Rolle</th>
                                    <th><span className={"fas fa-user-times"}></span></th>
                                    <th><span className={"fas fa-cog"}></span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>000</td>
                                    <td>Severin</td>
                                    <td>Henri</td>
                                    <td>Administrator</td>
                                    <td><a href={"#"}><span className={"fas fa-user-times"}></span></a></td>
                                    <td><a href={"#"}><span className={"fas fa-cog"}></span></a></td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>Severin</td>
                                    <td>Olga</td>
                                    <td>Benutzer</td>
                                    <td><a href={"#"}><span className={"fas fa-user-times"}></span></a></td>
                                    <td><a href={"#"}><span className={"fas fa-cog"}></span></a></td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Severin</td>
                                    <td>Peter</td>
                                    <td>Administrator</td>
                                    <td><a href={"#"}><span className={"fas fa-user-times"}></span></a></td>
                                    <td><a href={"#"}><span className={"fas fa-cog"}></span></a></td>
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

export default AdministrationUser;