import { StartFunc as StartFuncDashboardId } from "./DashboardId/EntryFile.js";
import { StartFunc as StartFuncMobileFromHtmlId } from "./MobileFromHtmlId/EntryFile.js";

const StartFunc = () => {
    StartFuncDashboardId();
    StartFuncMobileFromHtmlId();
};
StartFunc();