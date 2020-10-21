import React, { Component } from "react";
import { Line } from 'rc-progress';
import { status, productInfo, versionArray, saveData } from "./data";
import { EditBox } from "./editBox";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import menuIcon from "../images/menu.svg";

class TableRow extends Component {

    constructor (props) {
        super(props);
        this.menuRef = React.createRef();
        this.state = {
            isEdit: false,
            isMenu: false
        };
    }

    openEditBox = () => {
        this.setState({
            isEdit: true
        });
    }

    closeEditBox = () => {
        this.setState({
            isEdit: false
        });
    }

    openMenu = () => {
        this.setState({
            isMenu: true
        });
    }

    closeMenu = () => {
        this.setState({
            isMenu: false
        });
    }

    handleMenuEdit = () => {
        this.closeMenu();
        this.openEditBox();
    }

    handleDelete = () => {
        this.closeMenu();
        versionArray.splice(this.props.index, 1);
        productInfo.splice(this.props.index, 1);
        this.props.reRender();
        saveData();
    }

    render () {
        return (
            <>
                <div className="row">
                    <div className="cell" data-title="version">
                        {this.props.details.vname}
                    </div>
                    <div className="cell" data-title="progress">
                        <Line percent={this.props.details.progress}
                        style={{width: "200px"}} strokeWidth="6" trailWidth="6" strokeColor="#2532FF" />
                    </div>
                    <div className={`cell ${status[this.props.details.status].class}`} data-title="status">
                        {this.props.details.status}
                    </div>
                    <div className="cell" data-title="sdate">
                        {this.props.details.sdate}
                    </div>
                    <div className="cell" data-title="rdate">
                        {this.props.details.rdate}
                    </div>
                    <div className="cell" data-title="desc">
                        <div className="desc">
                            {this.props.details.desc}
                        </div>
                    </div>
                    <div className="cell" data-title="menu" ref={this.menuRef}>
                        <div className="menuIcon" onClick={this.openMenu}>
                            <img src={menuIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={this.menuRef.current}
                    keepMounted
                    open={this.state.isMenu}
                    onClose={this.closeMenu}
                >
                    <MenuItem onClick={this.handleMenuEdit}>Edit</MenuItem>
                    <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                </Menu>
                <Dialog
                open={this.state.isEdit}
                onClose={this.closeEditBox}
                aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Edit Box</DialogTitle>
                    <DialogContent>
                        <EditBox index={this.props.index} reRender={this.props.reRender}
                         details={this.props.details} closeEditBox={this.closeEditBox}/>
                    </DialogContent>
                </Dialog>
            </>
        );
    }

}

export {TableRow};