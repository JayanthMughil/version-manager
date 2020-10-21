import React, { Component } from 'react';
import { Content } from "./content";
import '../style/App.css';

class App extends Component {

  render () {
    return (
		<>
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
				<Content />
			</div>
			<div className="alertDiv" id="alertBox" />
		</>
    );
  }

}

export {App};
