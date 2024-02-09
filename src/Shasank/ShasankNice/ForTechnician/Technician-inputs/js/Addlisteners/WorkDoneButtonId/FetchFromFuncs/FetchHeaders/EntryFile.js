import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    let jVarLocalBody = {};
    jVarLocalBody.CompetedRemarks = LocalFuncForjVarLocalCompetedRemarksId();
    jVarLocalBody.InternalStatus = "Completed";
    
    KeysJson.body = JSON.stringify(jVarLocalBody);
    
    return KeysJson;
};

let LocalFuncForjVarLocalCompetedRemarksId = () => {
    let jVarLocalCompetedRemarksId = document.getElementById('CompetedRemarksId');

    if (jVarLocalCompetedRemarksId === null === false) {
        return jVarLocalCompetedRemarksId.value;
    };
};

export { StartFunc }