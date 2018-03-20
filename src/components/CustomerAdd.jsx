import React, { Component}  from 'react';
import AdministrationBackup from "./AdministrationBackup";

class CustomerAdd extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Kunde hinzufügen</h2>
                <form className={"form-horizontal"}>


                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="cName">Name</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="cName" />
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check1"/>
                                    <label class="form-check-label" for="check1">Rechnungsadresse wie Lieferadresse</label>
                            </div>
                        </div>
                    </div>

                    <div className={"row col-lg-4"}>
                        <div className={"form-group row"}>
                            <label className={"control-label col-sm-3 col-form-label"} for="cVorname">Vorname</label>
                            <div className={"col-sm-9"}>
                                <input type="text" className="form-control sm-10" id="cVorname" />
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clStrasse">Straße</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="clStrasse" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clWohnort">Wohnort</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="clWohnort" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="clPLZ">PLZ</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="clPLZ" />
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
                    <div className={"row"}>

                        <div className={"col-lg-8"}>
                            <button type="submit" className="btn btn-secondary btn-sup">Abbrechen</button>
                            <button type="submit" className="btn btn-primary btn-sup" >Speichern</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CustomerAdd;