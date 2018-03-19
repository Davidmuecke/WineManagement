import React, { Component}  from 'react';

class CustomerAdd extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Kunde hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"form-group row"}>
                            <label className={"control-label col-sm-3 col-form-label"} for="cName">Name</label>
                            <div className={"col-sm-9"}>
                                <input type="text" className="form-control sm-10" id="cName" />
                            </div>
                        </div>
                        <div className={"form-group row"}>
                            <label className={"control-label col-sm-3 col-form-label"} for="cVorname">Vorname</label>
                            <div className={"col-sm-9"}>
                                <input type="text" className="form-control sm-10" id="cVorname" />
                            </div>
                        </div>

                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clStrasse">Straße</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sName" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clWohnort">Wohnort</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sRegion" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clPLZ">PLZ</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sLand" />
                                </div>

                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="crStrasse">Straße</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="crStrasse" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="crWohnort">Wohnort</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="crWohnort" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="crPLZ">PLZ</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="crPLZ" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Abbrechen</button>
                    <button type="submit" className="btn btn-primary">Speichern</button>
                </form>
            </div>
        )
    }
}

export default CustomerAdd;