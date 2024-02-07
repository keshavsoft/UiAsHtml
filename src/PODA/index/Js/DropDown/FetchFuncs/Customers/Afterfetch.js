const StartFunc = ({ inFetchData }) => {
    let jVarLocalNamesArray = inFetchData.map(element => {
        return element.CustomerName
    });

    let jVarLocalCustomerId = document.getElementById("CustomerId");

    let jVarLocalNamesAsHtml = jVarLocalNamesArray.map(element => {
        return `<option value='${element}'>${element}</option>`;
    
    });

    jVarLocalCustomerId.innerHTML = jVarLocalNamesAsHtml.toString();
};

export { StartFunc };