const StartFunc = ({ inFetchData }) => {
    let jVarLocalNamesArray = inFetchData.map(element => {
        return element.VoucherName
    });

    let jVarLocalVoucherId = document.getElementById("VoucherId");

    let jVarLocalNamesAsHtml = jVarLocalNamesArray.map(element => {
        return `<option value='${element}'>${element}</option>`;
    });

    jVarLocalVoucherId.innerHTML = jVarLocalNamesAsHtml.toString();
};

export { StartFunc };