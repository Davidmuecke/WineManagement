import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class OrderAdd extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Neue Bestellung</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className="form-group">
                                <table className={"table sm-2"}>
                                    <tr>
                                        <td>test</td><td>test2</td><td>test3</td>
                                    </tr>
                                    <tr>
                                        <td>test</td><td>test2</td><td>test3</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="form-group">
                                <label for="wJahrgang">Jahrgang</label>
                                <input type="number" className="form-control" id="wJahrgang" />
                            </div>
                            <div className="form-group">
                                <label for="wMenge">Menge</label>
                                <input type="number" className="form-control" id="wMenge" />
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wName">Name</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="wName" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wJahrgang">Jahrgang</label>
                                <div className={"col-sm-9"}>
                                    <input type="number" className="form-control sm-10" id="wJahrgang" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wMenge">Liefermenge</label>
                                <div className={"col-sm-9"}>
                                    <input type="number" className="form-control sm-10" id="wMenge" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="wLieferdatum">Lieferdatum</label>
                                <div className={"col-sm-9"}>
                                    <input type="date" className="form-control sm-10" id="wLieferdatum" />
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            drei
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default OrderAdd;