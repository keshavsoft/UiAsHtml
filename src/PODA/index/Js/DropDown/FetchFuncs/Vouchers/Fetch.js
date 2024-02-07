import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js"

const StartFunc = async () => {
    let ResponseData = await fetch("/bin/Voucher");
    let LocaResJsonData = await ResponseData.json();
    
    StartFuncAfterFetch({ inFetchData: LocaResJsonData });
};

export { StartFunc };