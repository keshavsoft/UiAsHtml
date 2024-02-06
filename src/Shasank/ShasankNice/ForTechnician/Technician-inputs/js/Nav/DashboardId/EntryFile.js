import { StartFunc as StartFuncNav } from "./Nav.js";

const StartFunc = () => {
    let jVarLocalMobileFromHtmlId = document.getElementById('DashboardId');

    if (jVarLocalMobileFromHtmlId === null === false) {
        jVarLocalMobileFromHtmlId.addEventListener("click", StartFuncNav)

    }
};
export { StartFunc };
