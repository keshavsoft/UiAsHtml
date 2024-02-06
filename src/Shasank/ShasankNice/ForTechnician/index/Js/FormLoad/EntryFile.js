import { StartFunc as StartFuncButtonClick } from "./ButtonClick.js";
import { StartFunc as StartFuncAddlistliners } from "./Addlistliners/EntryFile.js";

const StartFunc = () => {
    StartFuncAddlistliners();
    StartFuncButtonClick();
};

export { StartFunc };