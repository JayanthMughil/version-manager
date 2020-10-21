import React, { Component } from 'react'
import { TableRow } from "./tableRow";
import { AddBox } from "./addBox";
import { productInfo } from "./data";

class Content extends Component {

	reRender = () => {
		this.forceUpdate();
	}

    render () {
        return (
        <>
		<div className="tableWrapper">
          <div className="tableContent">
          	<div className="table">
				<div className="row header">
					<div className="cell">Version</div>
					<div className="cell">Status</div>
					<div className="cell">Progress</div>
					<div className="cell">Start date</div>
					<div className="cell">Release date</div>
					<div className="cell">Description</div>
					<div className="cell">Action</div>
				</div>
				{productInfo.map((details, index) => {
					return (
					 <TableRow key={index} details={details} />
					);
				})}
			</div>
          </div>
        </div>
		<AddBox reRender={this.reRender} />
        </>
        );
    }

}

export {Content};