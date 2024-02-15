import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/EntryFile.js";
import { StartFunc as StartFuncShowSettlementDetails } from "./ShowSettlementDetails/StartFunc.js";

const StartFunc = ({ inPk }) => {
    StartFuncShowOrderDetails({ inPk });
    StartFuncShowSettlementDetails({ inPk });

};
export { StartFunc };