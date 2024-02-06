const StartFunc = () => {

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
    jFLocalUserShow();
};

const jFLocalUserShow = () => {
    let jVarLocalUser = getUrlQueryParams({ inGetKey: "Engineer" });
    if (jVarLocalUser === null) {
        window.location.href = "/JsonCRUD/Custom/ShasankNice/pages-login.html";
    };

    let jVarLocalUserShowId = document.getElementById('UserShowId');

    if (jVarLocalUserShowId === null === false) {
        jVarLocalUserShowId.innerHTML = jVarLocalUser;
    };

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };