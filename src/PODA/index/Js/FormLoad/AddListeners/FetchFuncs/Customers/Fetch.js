import { StartFunc as StartFuncAfterFetch } from "./Afterfetch.js"

const StartFunc = async () => {
    let ResponseData = await fetch("/bin/Customers");
    let LocaResJsonData = await ResponseData.json();
    
    StartFuncAfterFetch({ inFetchData: LocaResJsonData });
};

export { StartFunc };