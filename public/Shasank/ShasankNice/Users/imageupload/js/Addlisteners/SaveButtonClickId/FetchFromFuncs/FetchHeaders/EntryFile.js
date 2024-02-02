import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    let formData = new FormData();
    formData.append('image', await jFLocalPrepareBlob());
    KeysJson.body = formData
    return await KeysJson;
};

let jFLocalPrepareBlob = async () => {
    let jVarLocalCustomerImageId = document.getElementById('CustomerImageId');

    let jVarLocalFromFetch = await fetch(jVarLocalCustomerImageId.src);
    let blob = await jVarLocalFromFetch.blob();
    console.log(blob);
    return await blob;
};

export { StartFunc }