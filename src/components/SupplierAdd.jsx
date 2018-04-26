import React, { Component}  from 'react';
import $ from 'jquery';
import config from "../config";

/**
 * Class displays the SupplierAdd React Component which displays
 * the form to add a supplier
 */
class SupplierAdd extends Component {

    /**
     * The constructor calls the function checkUpdateID
     * @param props to get this.props.updateID
     */
    constructor(props){
        super(props);
        this.checkUpdateID();
    }
    /**
    * function controls the input fields and decides
    * wether a supplier will be added or updated
    */
    setSupplier(){
        if((document.getElementById("name").value==="") || (document.getElementById("region").value==="") ||
            (document.getElementById("country").value==="") || (document.getElementById("street").value==="") ||
            (document.getElementById("city").value==="") || (document.getElementById("post").value==="")){
            console.log("Nicht alle Felder ausgefüllt");
        } else {
            if(this.props.updateID === undefined || this.props.updateID === null) {
                this.addSupplier();
            } else {
                this.updateSupplier();
            }
        }
    }

    /**
     * adds a address to the database and a supplier with the address-refernce-id
     */
    addSupplier(){
        let data = $("form").serialize();
        $.post(config.Server.serverURL + "address/add", data, function(data){
            document.getElementById("adresse_id").setAttribute("value", data.insertId);
            let dataHelp = $("form").serialize();
            $.post(config.Server.serverURL + "supplier/add", dataHelp);
        });
    }

    /**
     * adds a adress to the database and updates a supplier
     */
    updateSupplier(){
        let data = $("form").serialize();
        $.post(config.Server.serverURL + "address/add", data, function(data){
            document.getElementById("adresse_id").setAttribute("value", data.insertId);
            let dataHelp = $("form").serialize();
            $.post(config.Server.serverURL + "supplier/update", dataHelp);
        });
    }

    /**
     * decides, wether a supplier will be updated or added
     * if a wine supplier be updatet, the values of the wine
     * are loaded into the input fields
     */
    checkUpdateID(){
        let adresse;
        if(this.props.updateID === null || this.props.updateID === undefined || this.props.updateID === 0) {
           console.log("updateID is undefined");
        } else {
                $.getJSON(config.Server.serverURL + "supplier/getById" + "?id=" + this.props.updateID, this.props.updateID).then(response =>
                {   document.getElementById("name").value = response.name;
                    document.getElementById("region").value = response.region;
                    document.getElementById("adresse_id").value = response.addressID;
                    adresse = response.addressID;
                    $.getJSON(config.Server.serverURL + "address/getById" + "?id=" + adresse, adresse).then(response =>
                    {   document.getElementById("country").value = response.country;
                        document.getElementById("street").value = response.street;
                        document.getElementById("city").value = response.city;
                        document.getElementById("post").value = response.post;
                    });
                });

        }
    }

    /**
     * Render React Component
     * @returns  html code
     */
    render() {
        return (
            <div className={"container"}>
                <h2>Winzer hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <input type="hidden" name="adresse_id" id="adresse_id" value="1"/>
                            <input type="hidden" id="id" name="id" value={this.props.updateID}/>
                                <div className={"form-group row"}>
                                    <label className={"control-label col-sm-3 col-form-label"} for="name">Name</label>
                                    <div className={"col-sm-9"}>
                                        <input type="text" className="form-control sm-10" id="name" name="name" />
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label className={"control-label col-sm-3 col-form-label"} for="region">Region</label>
                                    <div className={"col-sm-9"}>
                                        <input type="text" className="form-control sm-10" id="region" name="region" />
                                    </div>
                                </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="country">Land</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="country" name="country" />
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="street">Straße</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="street" name="street"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="city">Ort</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="city" name="city" />
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-3 col-form-label"} for="post">PLZ</label>
                                <div className={"col-sm-9"}>
                                    <input type="text" className="form-control sm-10" id="post" name="post" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-9"}/>
                        <div className={"col-lg-3"}>
                            <button onClick={() => this.setSupplier()} type="button" className="btn btn-primary float-right">Speichern</button>
                            <button type="cancel" className="btn btn-secondary float-right">Abbrechen</button>
                        </div>
                    </div>
                </form>
            </div>
        );}
}

export default SupplierAdd;