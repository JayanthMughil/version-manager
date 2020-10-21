import React, { Component, Suspense } from 'react';
import { Content } from "./content";
import { initData } from "./data";
import '../style/App.css';

class App extends Component {

  constructor (props) {
	  super(props);
	  this.state = {
		  isLoaded: false
	  };
  }

  componentDidMount = () => {
	initData();
	this.setState({
		isLoaded: true
	});
  }

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
				<Suspense fallback={<div>Loading ...</div>}>
					{this.state.isLoaded ?
					<Content /> : ""}
				</Suspense>
			</div>
			<div className="alertDiv" id="alertBox" />
		</>
    );
  }

}

export {App};
