let productInfo = [];

let versionArray = [];

const initData = () => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("product_info") && localStorage.getItem("version")) {
            productInfo = JSON.parse(localStorage.getItem("product_info"));
            versionArray = JSON.parse(localStorage.getItem("version"));
        }
      }
};

const saveData = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("product_info", JSON.stringify(productInfo));
        localStorage.setItem("version", JSON.stringify(versionArray));
    }
};

const status = {
    "UNRELEASED" : {
        name: "UNRELEASED",
        class: "unrel"
    },
    "IN PROGRESS": {
        name: "IN PROGRESS",
        class: "inprog"
    },
    "RELEASED": {
        name: "RELEASED",
        class: "rel"
    }
};

export {productInfo, versionArray, status, initData, saveData};