import React, { Component } from "react";
import { Line } from 'rc-progress';
import menuIcon from "../images/menu.svg";

class TableRow extends Component {

    render () {
        return (
            <div class="row">
                <div className="cell" data-title="Full Name">
                    Vincent Williamson
                </div>
                <div className="cell" data-title="Age">
                    <Line percent="70" style={{width: "200px"}} strokeWidth="6" trailWidth="6" strokeColor="#2532FF" />
                </div>
                <div className="cell inprog" data-title="Job Title">
                    iOS Developer
                </div>
                <div className="cell" data-title="Location">
                    Washington
                </div>
                <div className="cell" data-title="Location">
                    Washington
                </div>
                <div className="cell" data-title="Location">
                    Washington
                </div>
                <div className="cell" data-title="Location">
                    <div className="menuIcon" >
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
            </div>
        );
    }

}

export {TableRow};