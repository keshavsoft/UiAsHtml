import { StartFunc as StartFuncFetch } from "./Customers/Fetch.js";
import { StartFunc as StartFuncVouchers } from "./Vouchers/Fetch.js";

const StartFunc = () => {
    StartFuncFetch();
    StartFuncVouchers();
};

export { StartFunc };