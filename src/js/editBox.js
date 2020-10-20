import React, { Component } from 'react'
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

class EditBox extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isPickerOpen: false,
            isStartDate: false,
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

    handleDateChange = (date) => {
        if (this.state.isStartDate) {
            this.setState({
                startDate: date,
                startString: this.constructString(date)
            })
        } else {
            this.setState({
                releaseDate: date,
                endString: this.constructString(date)
            })
        }
    }

    openPicker = (type) => {
        if (type === "start") {
            this.setState({
                isStartDate: true
            }, function () {
                this.setState({
                    isPickerOpen: true
                });
            });
        } else {
            this.setState({
                isStartDate: false
            }, function () {
                this.setState({
                    isPickerOpen: true
                });
            });
        }
    }

    closePicker = () => {
        this.setState({
            isPickerOpen: false
        });
    }

    render () {
        return (
            <>
                <div>
                    <div className="editField">
                    <input className="editInp" placeholder="Version name" style={{flex: 0.5}} />
                    </div>
                    <div className="editField">
                    <input className="editInp" placeholder="Progress (1-100)" />
                    </div>
                    <div className="editField">
                    <input className="editInp" placeholder="Start date" value={this.state.startString} onClick={() => this.openPicker("start")} />
                    </div>
                    <div className="editField">
                    <input className="editInp" placeholder="Release date" value={this.state.endString} onClick={() => this.openPicker("end")} />
                    </div>
                    <div className="editField">
                    <input className="editInp" placeholder="Description" style={{flex: 0.3}} />
                    </div>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                    open = {this.state.isPickerOpen}
                    onOpen = {this.openPicker}
                    onClose = {this.closePicker}
                    orientation = "landscape"
                    variant = "dialog"
                    TextFieldComponent={() => null}
                    openTo = "date"
                    value = {this.state.isStartDate ? this.state.startDate : this.state.releaseDate} 
                    onChange = {this.handleDateChange} />
                </MuiPickersUtilsProvider>
            </>
        );
    }

}

export {EditBox};