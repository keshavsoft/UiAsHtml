let StartFunc = async ({ inFromfetch }) => {
    let LocalFromfetch = inFromfetch;

    if (LocalFromfetch.status === 500) {
        let data = await LocalFromfetch.json();
        console.log("data : ", data);
    };

    let jVarLocaldataSuccess = await LocalFromfetch.text();
    jFLocalShowSuccess({ inIdToShow: jVarLocaldataSuccess });

    console.log("jVarLocaldataSuccess : ", jVarLocaldataSuccess, jVarLocaldataSuccess >= 1);
    //window.location.href = "/JsonCRUD/Custom/ShasankNice/Technicians/Show/Show.html";
    // window.location.href = "";
};

let jFLocalShowSuccess = ({ inIdToShow }) => {
    let template = document.getElementById("templateForSuccessId");
    const clone = template.content.cloneNode(true);

    let javrlocalDisplayTextClass = clone.querySelector(".SavedClass");

    javrlocalDisplayTextClass.innerHTML = inIdToShow;

    let jVarLocalSuccessAlertsDivId = document.getElementById("SuccessAlertsDivId");

    jVarLocalSuccessAlertsDivId.appendChild(clone);
};

export { StartFunc };
