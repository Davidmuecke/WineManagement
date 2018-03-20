import React, { Component}  from 'react';


class WineAdd extends Component {


    render() {
        return (
            <div className={"container"}>
                <h2>Wein hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Name</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control sm-10" id="wName"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="wJahrgang">Jahrgang</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="wJahrgang"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="wMenge">Liefermenge</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="wMenge"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="wLieferdatum">Lieferdatum</label>
                                <div className={"col-sm-8"}>
                                    <input type="date" className="form-control" id="wLieferdatum"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Händlerpreis</label>
                                <div className={"col-sm-8"}>
                                    <input type="float" className="form-control" id="wHaendlerpreis"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Verkaufspreis</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="wVerkaufspreis"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Anbauort</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control " id="wAnbauort"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Lagerort</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control" id="wLagerort"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Lieferant</label>
                                <div className={"col-sm-8"}>
                                    <select className="form-control" id="wLieferant">
                                        <option>Lieferant1</option>
                                        <option>Lieferant2</option>
                                        <option>Lieferant3</option>
                                        <option>Lieferant4</option>
                                    </select>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <button className={"btn formButton"}>Lieferant neu anlegen</button>
                            </div>
                            <div className={"form-group row"}>
                                <button className={"btn formButton"}>Lieferant bearbeiten</button>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-8"}></div>
                        <div className={"col-lg-4"}>
                            <button type="cancel" className="btn btn-primary float-right">Speichern</button>
                            <button type="submit" className="btn btn-secondary float-left">Abbrechen</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default WineAdd;