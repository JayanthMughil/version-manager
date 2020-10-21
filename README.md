This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required dependencies for the project.

### `npm start`

Launches the version manager in the local server at port 3000.

## Libraries used

@date-io/date-fns: "^1.3.13",
@material-ui/core: "^4.11.0",
@material-ui/lab: "^4.0.0-alpha.56",
@material-ui/pickers: "^3.2.10",
@testing-library/jest-dom: "^4.2.4",
@testing-library/react: "^9.3.2",
@testing-library/user-event: "^7.1.2",
date-fns: "^2.16.1",
rc-progress: "^3.1.0",

## Product usage - Version manager

Version manager is used to track release of new and existing versions of the product.

**Add entry**

=> An add box with a number of input fields can be found at the bottom which can be used to add entries to the table.

=> Version name is unique and cannot be duplicated.

=> Progress shows the progress of the version in a progress bar. Its values should be between 0 to 100.

=> Start date and end date indicates the duration of the version. 

=> Description gives some additional information on the version.

=> Clicking on the add button adds the entry to the row.

**Menu**

=> Menu icon on the row consists of two options, edit and delete.

=> Clicking on the delete option deleted the row.

=> Clicking on the edit option opens an edit box similar to that of add.


