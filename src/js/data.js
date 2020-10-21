var productInfo = [
    {
        vname: "Verison 1.9",
        progress: "10",
        status: "UNRELEASED",
        sdate: "17, Oct 2020",
        rdate: "18, Oct 2020",
        desc: "Customer form to add new data to the table using this entry form.sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    }
];

var versionArray = ["Verison 1.9"];

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

export {productInfo, versionArray, status};