
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '@material-ui/lab/Alert';

const showAlert = (opts) => {

    ReactDOM.render(
        <Alert variant="filled" severity={opts.severity}>
            {opts.msg}
        </Alert>,
        document.getElementById("alertBox")
    );

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById("alertBox"));
    }, 3000);

};

export {showAlert};

