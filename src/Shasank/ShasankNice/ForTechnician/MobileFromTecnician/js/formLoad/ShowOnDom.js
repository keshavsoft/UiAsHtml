const StartFunc = () => {
    jFLocalUserShow();

    jFLocalCallbuttonClick();
};

const jFLocalCallbuttonClick = () => {
    let ButtonClickId = "RefreshbuttonIn";
    let jVarLocalButtonClass = document.getElementById(ButtonClickId);
    jVarLocalButtonClass.click();
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