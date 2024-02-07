import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

const StartFunc = () => {
    let jVarLocalBtnSaveId = document.getElementById("BtnSaveId");

    jVarLocalBtnSaveId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };