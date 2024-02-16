// import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/EntryFile.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {
    StartFuncformLoad();

    const form = document.getElementById("FormId");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent HTML refresh

        StartFuncButtonClickFunc();
    });
};

StartFunc();