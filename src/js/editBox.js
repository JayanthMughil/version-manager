import React, { Component } from 'react'
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {validateProgress, validateVersion} from "./utils";
import { showAlert } from "./alertBox";
import { status, productInfo, versionArray, saveData } from "./data";

class EditBox extends Component {

    constructor (props) {
        super(props);
        this.versRef = React.createRef();
        this.progRef = React.createRef();
        this.sdateRef = React.createRef();
        this.rdateRef = React.createRef();
        this.descRef = React.createRef();
        this.state = {
            startPick: false,
            endPick: false,
            startDate: this.props.details.sdateObj,
            releaseDate: this.props.details.rdateObj,
            startString: this.props.details.sdate,
            endString: this.props.details.rdate
        };
    }

    constructString = (date) => {
        date = date.toString();
        const mon = date.substring(4, 7);
        const day = date.substring(8, 10);
        const year = date.substring(11, 15);
        return day + ", " + mon + " " + year;
    }

    handleStartChange = (date) => {
        this.setState({
            startDate: date,
            startString: this.constructString(date)
        });
    }

    handleEndChange = (date) => {
        this.setState({
            releaseDate: date,
            endString: this.constructString(date)
        })
    }

    openStartPicker = () => {
        this.setState({
            startPick: true
        });
    }

    openEndPicker = () => {
        this.setState({
            endPick: true
        });
    }

    closePicker = () => {
        this.setState({
            startPick: false,
            endPick: false
        });
    }

    checkStartKeyDown = (event) => {
        if (event.keyCode !== 9) {
            this.openStartPicker();
        }
    }

    checkEndKeyDown = (event) => {
        if (event.keyCode !== 9) {
            this.openEndPicker();
        }
    }

    checkVersion = () => {
        if (this.versRef.current.value !== this.props.details.vname) {
            validateVersion(this.versRef.current.value);
        }
    }

    checkProgress = () => {
        validateProgress(this.progRef.current.value);
    }

    getStatus = () => {
        let stat;
        if (validateProgress(this.progRef.current.value)) {
            const num = Number(this.progRef.current.value);
            if (num === 0) {
                stat = status['IN PROGRESS'].name;
            }
            if (num > 0 && num < 100) {
                stat = status['UNRELEASED'].name;
            }
            if (num === 100) {
                stat = status['RELEASED'].name;
            }
        }
        return stat;
    }

    editEntry = () => {
        const entryObj = {
            vname: this.versRef.current.value,
            progress: this.progRef.current.value,
            status: this.getStatus(),
            sdate: this.sdateRef.current.value,
            rdate: this.rdateRef.current.value,
            sdateObj: this.state.startDate,
            rdateObj: this.state.releaseDate,
            desc: this.descRef.current.value
        };
        versionArray.splice(this.props.index, 1, entryObj.vname);
        productInfo.splice(this.props.index, 1, entryObj);
        this.props.reRender();
        saveData();
    }

    handleEntryEdit = () => {
        if (this.versRef.current.value !== "" && this.progRef.current.value !== "" && this.descRef.current.value !== "" && this.sdateRef.current.value !== "") {
            if (this.versRef.current.value === this.props.details.vname) {
                if (validateProgress(this.progRef.current.value)) {
                    this.editEntry();
                    this.props.closeEditBox();
                    showAlert({msg: "Entry edited successfully", severity: "success"});
                }
            } else {
                if (validateProgress(this.progRef.current.value) && validateVersion(this.versRef.current.value)) {
                    this.editEntry();
                    this.props.closeEditBox();
                    showAlert({msg: "Entry edited successfully", severity: "success"});
                }
            }
    
        } else {
            let text = "";
            if (this.versRef.current.value === "") {
                text = "Version name should not be empty";
            } else if (this.progRef.current.value === "") {
                text = "progress value should not be empty";
            } else if (this.descRef.current.value === "") {
                text = "Description should not be empty";
            } else if (this.sdateRef.current.value === "") {
                text = "Start date should not be empty";
            }
            showAlert({msg: text, severity: "error"});
        }
    }

    render () {
        return (
            <>
                <div>
                    <div className="editField">
                    <input className="editInp"
                    defaultValue={this.props.details.vname}
                    onBlur={this.checkVersion} ref={this.versRef} placeholder="Version name" style={{flex: 0.5}} />
                    </div>
                    <div className="editField">
                    <input className="editInp"
                    defaultValue={this.props.details.progress}
                    onBlur={this.checkProgress} ref={this.progRef} placeholder="Progress (0-100)" />
                    </div>
                    <div className="editField">
                    <input className="editInp" 
                    ref={this.sdateRef} placeholder="Start date" value={this.state.startString}
                    onKeyDown={this.checkStartKeyDown}
                    onClick={this.openStartPicker} />
                    </div>
                    <div className="editField">
                    <input className="editInp"
                    ref={this.rdateRef} placeholder="Release date" value={this.state.endString} 
                    onKeyDown={this.checkEndKeyDown}
                    onClick={this.openEndPicker} />
                    </div>
                    <div className="editField">
                    <input className="editInp" 
                    defaultValue={this.props.details.desc}
                    ref={this.descRef} placeholder="Description" style={{flex: 0.3}} />
                    </div>
                    <div className="btnField">
                        <button className="editbtn" onClick={this.handleEntryEdit}>Save</button>
                        <button className="editbtn" onClick={this.props.closeEditBox} style={{marginLeft: "20px"}}>Cancel</button>
                    </div>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    open = {this.state.startPick}
                    onOpen = {this.openStartPicker}
                    onClose = {this.closePicker}
                    maxDate = {this.state.endString !== "" ? this.state.releaseDate : null}
                    orientation = "landscape"
                    variant = "dialog"
                    TextFieldComponent={() => null}
                    openTo = "date"
                    value = {this.state.startDate} 
                    onChange = {this.handleStartChange} />
                    <DatePicker
                    open = {this.state.endPick}
                    onOpen = {this.openEndPicker}
                    onClose = {this.closePicker}
                    minDate = {this.state.startString !== "" ? this.state.startDate : null}
                    orientation = "landscape"
                    variant = "dialog"
                    TextFieldComponent={() => null}
                    openTo = "date"
                    value = {this.state.releaseDate} 
                    onChange = {this.handleEndChange} />
                </MuiPickersUtilsProvider>
            </>
        );
    }

}

export {EditBox};