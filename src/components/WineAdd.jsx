import React, { Component, Input }  from 'react';
import $ from 'jquery';
import config from "../config";


/**
 *
 */
class WineAdd extends Component {

    constructor(props){

        super(props);
        this.state = {
            tableHeader: [],
            tableBody: [],
            items: []
        }
        this.checkUpdateID();
        this.getServerData();
    }

    /**
     *
     * @param obj
     */
    setWine(obj){
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

    getServerData() {
        $.getJSON(config.Server.serverURL + "supplier/get", "").then(response => {

            this.setState({
                tableHeader: response.tableHeader,
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

    addWine(){
        let data = $("form").serialize();
        $.post( config.Server.serverURL + "wine/add", data );
    }

    updateWine(){
        let data = $("form").serialize();
        $.post( config.Server.serverURL + "wine/update", data );
    }

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
                            <button type="button" onClick={() => this.setWine(this)} className="btn btn-primary float-right">Speichern</button>
                            <button type="cancel" className="btn btn-secondary float-right">Abbrechen</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default WineAdd;