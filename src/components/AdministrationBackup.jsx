import React, { Component}  from 'react';

class AdministrationBackup extends Component {
    render() {
        return (
            <div className={"container"}>
                <h2>Backup</h2>
                <form className={"form-horizontal form-backup"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <div className="form-group">
                                <label className={"control-label sm-2 col-lg-6"}>Führen sie jetzt ein Backup durch:</label>
                                <button type="submit" className="btn btn-primary col-lg-3">Backup durchführen</button>
                            </div>
                            <div className="form-group">
                                <label className={"col-lg-6"}>Letztes Backup durchgeführt am: </label>
                                <label className={"col-lg-3"}>12.12.17</label>
                            </div>
                        </div>
                    </div>
                </form>

                <h2>Update</h2>
                <form className={"form-horizontal form-update"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <div className="form-group">
                                <label className={"control-label sm-2 col-lg-6"}>Führen sie jetzt ein Update durch:</label>
                                <button type="submit" className="btn btn-primary col-lg-3">Update durchführen</button>
                            </div>
                            <label className={"col-lg-6"}>Letztes Update durchgeführt am: </label>
                            <label className={"col-lg-6"}>12.12.17</label>
                            <label className={"col-lg-6"}>Aktuelle Version: </label>
                            <label className={"col-lg-6"}>1.0.0</label>
                            <label className={"col-lg-6"}>Verfügbare Version: </label>
                            <label className={"col-lg-6"}>1.5.7</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdministrationBackup;