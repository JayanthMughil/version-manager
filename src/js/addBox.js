import React, { Component } from 'react'
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {validateProgress, validateVersion} from "./utils";
import { showAlert } from "./alertBox";
import { status, productInfo, versionArray } from "./data";

class AddBox extends Component {

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
            startDate: new Date(),
            releaseDate: new Date(),
            startString: "",
            endString: ""
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
        validateVersion(this.versRef.current.value);
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

    clearAllFields = () => {
        this.versRef.current.value = "";
        this.progRef.current.value = "";
        this.sdateRef.current.value = "";
        this.rdateRef.current.value = "";
        this.descRef.current.value = "";
    }

    addEntry = () => {
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
        versionArray.push(entryObj.vname);
        productInfo.push(entryObj);
        this.props.reRender();
    }

    handleEntryAdd = () => {
        if (this.versRef.current.value !== "" && this.progRef.current.value !== "" && this.descRef.current.value !== "" && this.sdateRef.current.value !== "") {
            if (validateVersion(this.versRef.current.value) && validateProgress(this.progRef.current.value)) {
                this.addEntry();
                this.clearAllFields();
                showAlert({msg: "Entry added successfully", severity: "success"});
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
                <div className="footer">
                    <div className="inputFields">
                        <input placeholder="Version name"
                        onBlur={this.checkVersion}
                        ref={this.versRef} style={{flex: 0.5}} />
                        <input placeholder="Progress (1-100)"
                        onBlur={this.checkProgress}
                        ref={this.progRef} />
                        <input placeholder="Start date" ref={this.sdateRef} value={this.state.startString}
                        onKeyDown={this.checkStartKeyDown}
                        onClick={this.openStartPicker} />
                        <input placeholder="Release date" ref={this.rdateRef} value={this.state.endString} 
                        onKeyDown={this.checkEndKeyDown}
                        onClick={this.openEndPicker} />
                        <input placeholder="Description" ref={this.descRef} style={{flex: 0.3}} />
                        <button onClick={this.handleEntryAdd} style={{flex: 0.18}}>Add</button>
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

export {AddBox};