// import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/pullTableData/StartFunc.js";
// import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/EntryFile.js";

const StartFunc = () => {
    StartFuncformLoad();
    StartFuncButtonClickFunc();
    // const form = document.getElementById("FormId");

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault(); // Prevent HTML refresh

    //     StartFuncButtonClickFunc();
    // });

};

StartFunc();