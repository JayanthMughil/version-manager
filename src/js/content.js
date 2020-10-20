import React, { Component } from 'react'
import { TableRow } from "./tableRow";
import { AddBox } from "./addBox";

const array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

class Content extends Component {

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
				{array.map((item, index) => {
					return (
					 <TableRow key={index}/>
					);
				})}
			</div>
          </div>
        </div>
		<AddBox />
        </>
        );
    }

}

export {Content};