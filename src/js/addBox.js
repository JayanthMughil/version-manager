import React, { Component } from 'react'

class AddBox extends Component {

    render () {
        return (
            <div className="footer">
                <div className="inputFields">
                    <input placeholder="Version name" style={{flex: 0.5}} />
                    <input placeholder="Start date" />
                    <input placeholder="Release date" />
                    <input placeholder="Description" style={{flex: 0.3}} />
                    <button style={{flex: 0.18}}>Add</button>
                </div>
            </div>
        );
    }

}

export {AddBox};