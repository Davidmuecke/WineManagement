import React, { Component}  from 'react';


class SupplierAdd extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Winzer hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sName">Name</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sName" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sRegion">Region</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sRegion" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sLand">Land</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sLand" />
                                </div>

                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sStrasse">Straße</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sStrasse" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sOrt">Ort</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sOrt" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="sPLZ">PLZ</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="sPLZ" />
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

export default SupplierAdd;