import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    StartFuncAddlisteners();

    StartFuncShowOnDom();
};

export { StartFunc };