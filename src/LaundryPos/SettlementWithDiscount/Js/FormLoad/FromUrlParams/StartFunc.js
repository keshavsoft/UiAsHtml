import { StartFunc as StartFuncShowOnDom } from "../../ShowOnDom/StartFunc.js";

let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    if (jVarLocalBranchName === null) {
        Swal.fire({
            title: "BranchName!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    };
    StartFuncShowOnDom({ inPk: jFLocalOrderNumber });
};



let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }