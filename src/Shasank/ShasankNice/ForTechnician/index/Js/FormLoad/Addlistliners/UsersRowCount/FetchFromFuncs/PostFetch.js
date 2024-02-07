// import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "./FetchHeaders/Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    // let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    localStorage.setItem("TicketsData",JSON.stringify(data))

    // return await data;
};

export { StartFunc };