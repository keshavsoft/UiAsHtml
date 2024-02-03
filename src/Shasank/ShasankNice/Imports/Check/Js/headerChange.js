let jFChangeHeaderActiveClass = () => {
    jFClassAddFunc();
};

let jFClassAddFunc = () => {
    let jVarLocalCustomerMainTabId = document.getElementById("TicketMainTabId");
    let jVarLocalMenuTab = document.getElementById("ImportTabMenuId");
    let jVarLocalCustomerAnchorTagId = document.getElementById("ShowAll");
    let jVarLocalCustomerLiTagId = document.getElementById("ShowAllAnchorTagId");

    if (jVarLocalMenuTab !== null) {
        jVarLocalMenuTab.classList.remove("collapsed");
    };

    if (jVarLocalCustomersTab !== null) {
        jVarLocalCustomersTab.classList.add("show");
    };

    if (jVarLocalCustomerAnchorTagId !== null) {
        jVarLocalCustomerAnchorTagId.classList.add("active");
    };

    if (jVarLocalCustomerLiTagId !== null) {
        jVarLocalCustomerLiTagId.classList.add("active");
    };
};

jFChangeHeaderActiveClass();