let StartFunc = () => {
    let LocalTicketsData = JSON.parse(localStorage.getItem("TicketsData"));
    LocalFuncForUsersRowCountId({ inData: LocalTicketsData })
};

let LocalFuncForUsersRowCountId = ({ inData }) => {
    let jVarLocalEngineer = getUrlQueryParams({ inGetKey: "Engineer" });
    let jVarLocalTechniciansData = inData.filter(element => element.Engineer === jVarLocalEngineer)
    let jVarLocalUsersRowCountId = document.getElementById('UsersRowCountId');

    if (jVarLocalUsersRowCountId === null === false) {
        jVarLocalUsersRowCountId.innerHTML = jVarLocalTechniciansData.length
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }