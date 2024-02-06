import { StartFunc as StartFuncNav } from "./Nav.js";

const StartFunc = () => {
    let jVarLocalMobileFromHtmlId = document.getElementById('MobileFromHtmlId');

    if (jVarLocalMobileFromHtmlId === null === false) {
        jVarLocalMobileFromHtmlId.addEventListener("click", StartFuncNav)

    }
};
export { StartFunc };
