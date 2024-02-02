import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let jVarLocalId = getUrlQueryParams({ inGetKey: "Id" });

    let jVarLocalFetchHeaders = await StartFuncFetchHeaders();
    console.log(jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/UploadImage/${jVarLocalId}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };

// POST http://localhost:7016/bin/Users/UploadMultipleImages/1