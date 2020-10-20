import React, { Component } from "react";
import { Line } from 'rc-progress';
import menuIcon from "../images/menu.svg";

class TableRow extends Component {

    render () {
        return (
            <div class="row">
                <div className="cell" data-title="version">
                    {this.props.details.vname}
                </div>
                <div className="cell" data-title="progress">
                    <Line percent={this.props.details.progress}
                     style={{width: "200px"}} strokeWidth="6" trailWidth="6" strokeColor="#2532FF" />
                </div>
                <div className="cell inprog" data-title="status">
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
                <div className="cell" data-title="menu">
                    <div className="menuIcon" >
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
            </div>
        );
    }

}

export {TableRow};