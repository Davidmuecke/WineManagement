import React, { Component}  from 'react';


class SupplierOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    changeFunk(obj) {
        var term = document.getElementById("sSuche").value;
        //Datenbankabfrage hier
        obj.setState({
            searchTerm: term
        });
    }
    render() {
        return (
            <div className={"container"}>
                <h2>Winzer Übersicht {this.state.searchTerm}</h2>
                <form className={"form"}>
                    <div className={"row"}>
                        <div className="input-group col-md-12">
                            <input type="text" placeholder="Winzer suchen" className="form-control sm-10" id="sSuche"/>
                            <span className="input-group-btn">
                                    <button className="btn" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </span>
                        </div>
                    </div>
                </form>
                <div className={"table-responsive"}>
                    <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Kundennummer</th>
                        <th scope="col">Name</th>
                        <th scope="col">Region</th>
                        <th scope="col">Land</th>
                        <th scope="col">Straße</th>
                        <th scope="col">Ort</th>
                        <th scope="col">PLZ</th>
                        <th><i class="fas fa-trash-alt"></i></th>
                        <th><span className="fa fa-cog"></span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mueller Hans</td>
                        <td>Champagne</td>
                        <td>Frankreich</td>
                        <td>Winestr. 2</td>
                        <td>Champagne</td>
                        <td>123123</td>
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><span className="fa fa-cog"></span></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Dieter Riesling</td>
                        <td>Pfalz</td>
                        <td>Deutschland</td>
                        <td>Winzerweg 26</td>
                        <td>Landau</td>
                        <td>74351</td>
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><span className="fa fa-cog"></span></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Maria Cabernet</td>
                        <td>Vinewood</td>
                        <td>USA</td>
                        <td>Spooner Str. 4</td>
                        <td>Springfield</td>
                        <td>123</td>
                        <td><a href={"link.htm"}><i class="fas fa-trash-alt"></i></a></td>
                        <td><span className="fa fa-cog"></span></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default SupplierOverview;