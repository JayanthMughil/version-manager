import { versionArray } from "./data";
import { showAlert } from "./alertBox"; 

const validateProgress = (value) => {
    if (!isNaN(value)) {
        if (value >= 0 && value <= 100) {
            return true;
        } else {
            showAlert({msg: "Progress should only be between 1 to 100", severity: "error"});
        }
    } else {
        showAlert({msg: "Progress should only be a number", severity: "error"});
        return false;
    }
};

const validateVersion = (value) => {
    if (versionArray.includes(value)) {
        showAlert({msg: "Version name should be unique", severity: "error"});
        return false;
    }
    return true;
};

export {validateProgress, validateVersion};