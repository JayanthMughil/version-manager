import React, { Component } from "react";
import { Line } from 'rc-progress';
import { status } from "./data";
import { EditBox } from "./editBox";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
                    <MenuItem onClick={this.closeMenu}>Delete</MenuItem>
                </Menu>
                <Dialog
                open={this.state.isEdit}
                onClose={this.closeEditBox}
                aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Edit Box</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        You can edit your content here
                    </DialogContentText>
                        <EditBox />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.closeEditBox} color="primary">
                        Edit
                    </Button>
                    <Button onClick={this.closeEditBox} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }

}

export {TableRow};