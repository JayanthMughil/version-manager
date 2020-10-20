import React, { Component } from 'react';
import { Line } from 'rc-progress';
import '../style/App.css';

const array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

class App extends Component {

  render () {
    return (
      <div className="bodyWrapper">
        <div className="header">
          <div className="headerLabel">
            <div className="headerTextOne">
              Projects / ENV 1.5
            </div>
            <div className="headerTextTwo">
              Releases
            </div>
          </div>
        </div>
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
					<div class="row" key={index}>
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
							31
						</div>
					</div>
					);
				})}
			</div>
          </div>
        </div>
		<div className="footer">
			<div className="inputFields">
				<input placeholder="Version name" style={{flex: 0.5}} />
				<input placeholder="Start date" />
				<input placeholder="Release date" />
				<input placeholder="Description" style={{flex: 0.3}} />
				<button style={{flex: 0.18}}>Add</button>
			</div>
		</div>
      </div>
    );
  }

}

export {App};
