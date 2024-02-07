import { StartFunc as StartFuncDropDown } from "./DropDown/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = () => {
    StartFuncAddListeners();
    StartFuncDropDown();
};
export { StartFunc };