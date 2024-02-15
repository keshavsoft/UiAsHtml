import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: jVarLocalBranchName
    });

    if (jVarLocalData.KTF === false) {
        return "";
    };

    if ("JsonData" in jVarLocalData === false) {
        return "";
    };

    if ("CheckOutData" in jVarLocalData.JsonData === false) {
        return "";
    };

    jFLocalToInputCashAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.CashAmount });
    jFLocalToInputUPIAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.UPIAmount });
    jFLocalToInputCardAmountId({ inCashAmountId: jVarLocalData.JsonData.CheckOutData.CardAmount });
    jFLocalToInputDiscountPerId({ inDiscountPerId: jVarLocalData.JsonData.CheckOutData.DiscountPer });

};

let jFLocalToInputCashAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CashAmountId';
    let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCashAmountId.value = inCashAmountId;
};

let jFLocalToInputUPIAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'UPIAmountId';
    let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalUPIAmountId.value = inCashAmountId;
};

let jFLocalToInputCardAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CardAmountId';
    let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCardAmountId.value = inCashAmountId;
};

let jFLocalToInputDiscountPerId = ({ inDiscountPerId }) => {
    let jVarLocalHtmlId = 'DiscountPerId';
    let jVarLocalDiscountPerId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDiscountPerId.value = inDiscountPerId;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };