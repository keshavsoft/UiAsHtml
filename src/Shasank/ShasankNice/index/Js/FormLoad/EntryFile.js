import { StartFunc as StartFuncAddlisteners } from "./Addlistliners/EntryFile.js";

const StartFunc = () => {
    StartFuncAddlisteners();

    jFCheckBackend().then();

    jFLocalStartFunc();
};

let jFLocalStartFunc = () => {
    let jVarLocalUsersRowCountButtonClickId = document.getElementById("UsersRowCountButtonClickId");
    let jVarLocalTechniciansRowCountButtonClickId = document.getElementById("TechniciansRowCountButtonClickId");
    let jVarLocalTicketsRowCountButtonClickId = document.getElementById("TicketsRowCountButtonClickId");

    if (jVarLocalUsersRowCountButtonClickId === null === false) {
        jVarLocalUsersRowCountButtonClickId.click();
    };
    if (jVarLocalTechniciansRowCountButtonClickId === null === false) {
        jVarLocalTechniciansRowCountButtonClickId.click();
    };
    if (jVarLocalTicketsRowCountButtonClickId === null === false) {
        jVarLocalTicketsRowCountButtonClickId.click();
    };
};

let jFCheckBackend = async () => {
    let jVarLocalFetchUrl = "/AboutUs";
    //  window.location.origin;

    let response = await fetch(jVarLocalFetchUrl);

    if (response.status === 404) {
        let jVarLocalBrandNameId = document.getElementById('BrandNameId');
        jVarLocalBrandNameId.style.color = "red";

        Swal.fire({
            title: "Check once!",
            text: "Backend is not available...",
            icon: "error"
        });
    };
};

export { StartFunc };