import React, { Component, Input }  from 'react';
import $ from 'jquery';
import config from "../config";


/**
 * Class displays the WineAdd React Component which displays
 * the form to add a supplier
 */

class WineAdd extends Component {

    /**
     * The constructor calls the function checkUpdateID and getServerData()
     * @param props to get this.props.updateID
     * The app state includes
     * Array[][] tableBody - two dimensional array contains suppliers
     */
    constructor(props){

        super(props);
        this.state = {
            tableBody: []
        }
        this.checkUpdateID();
        this.getServerData();
    }

    /**
     * function controls the input fields and decides
     * wether a wine will be added or updated
     */
    setWine(){
        if ((document.getElementById("name").value === "") || (document.getElementById("year").value === "") ||
                (document.getElementById("amount").value === "") || (document.getElementById("deliveryDate").value === "") ||
                (document.getElementById("basePrice").value === "") || (document.getElementById("sellPrice").value === "") ||
                (document.getElementById("region").value === "") || (document.getElementById("location").value === "") ||
                (document.getElementById("supplierID").value === "")) {
                console.log("Nicht alle Felder ausgefüllt");
            } else {
                if(this.props.updateID === undefined || this.props.updateID === null) {
                    this.addWine();
                } else {
                    this.updateWine();
                }
            }
        }

    /**
     * gets the supplier and creates the optionlist for the supplier-select
     */
    getServerData() {
        $.getJSON(config.Server.serverURL + "supplier/get", "").then(response => {

            this.setState({
                tableBody: response.tableBody
            });
                let optionList = document.getElementById('supplierID').options;
                let options = [];
                for(let i = 0; i < this.state.tableBody.length; i++){
                    options[i] = {text: this.state.tableBody[i][1], value: this.state.tableBody[i][0]};
                }
                options.forEach(option =>
                    optionList.add(
                        new Option(option.text, option.value)
                    ));
        });
    }

    /**
     * adds a wine to the database
     */
    addWine(){
        let data = $("form").serialize();
        $.post( config.Server.serverURL + "wine/add", data ).promise().then( this.props.setState(this.props.STATES.wineOverview));
    }

    /**
     * updates a wine in the database
     */
    updateWine(){
        let data = $("form").serialize();
        $.post( config.Server.serverURL + "wine/update", data ).promise().then( this.props.setState(this.props.STATES.wineOverview));
    }

    /**
     * decides, wether a wine will be updated or added
     * if a wine should be updatet, the values of the wine
     * are loaded into the input fields
     */
    checkUpdateID(){
        if(this.props.updateID === null || this.props.updateID === undefined || this.props.updateID === 0) {
            console.log("updateID is undefined");
        } else {
            $.getJSON(config.Server.serverURL + "wine/getById" + "?id=" + this.props.updateID, this.props.updateID).then(response => {
                document.getElementById("name").value = response.name;
                document.getElementById("year").value = response.year;
                document.getElementById("amount").value = response.amount;
                document.getElementById("deliveryDate").value = response.deliveryDate.substr(0,10);
                document.getElementById("basePrice").value = response.basePrice;
                document.getElementById("sellPrice").value = response.sellPrice;
                document.getElementById("region").value = response.region;
                document.getElementById("location").value = response.location;
                document.getElementById("supplierID").value = response.supplierID;
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
                <h2>Wein hinzufügen</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <input type="hidden" id="id" name="id" value={this.props.updateID}/>
                                <label className={"control-label col-sm-4 col-form-label"}>Name</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control sm-10" id="name" name="name"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="year">Jahrgang</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="year" name="year"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="amount">Liefermenge</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="amount" name="amount"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}
                                       for="deliveryDate">Lieferdatum</label>
                                <div className={"col-sm-8"}>
                                    <input type="date" className="form-control" id="deliveryDate" name="deliveryDate"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Händlerpreis</label>
                                <div className={"col-sm-8"}>
                                    <input type="float" className="form-control" id="basePrice" name="basePrice"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Verkaufspreis</label>
                                <div className={"col-sm-8"}>
                                    <input type="number" className="form-control" id="sellPrice" name="sellPrice"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Anbauort</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control " id="region" name="region"/>
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Lagerort</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control" id="location" name="location"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Lieferant</label>

                                <select className="form-control" id="supplierID" name="supplierID"/>

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
                        <div className={"col-lg-8"}/>
                        <div className={"col-lg-4"}>
                            <button type="button" onClick={() => this.setWine()} className="btn btn-primary float-right">Speichern</button>
                            <button type="cancel" className="btn btn-secondary float-right">Abbrechen</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default WineAdd;