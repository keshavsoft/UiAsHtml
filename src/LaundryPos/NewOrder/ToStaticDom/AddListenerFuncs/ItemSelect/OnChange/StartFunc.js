import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalItemSelect = jVarLocalMenItemsTabId.querySelector(".ItemSelect");

        if (jVarLocalItemSelect === null === false) jVarLocalItemSelect.addEventListener("change", (event) => {
            jFLocalItemSelectChange({
                inEvent: event,
                inLocalStorageKey: "Items"
            });
        });
    };
};

let jFLocalItemSelectChange = ({ inEvent }) => {
    try {
        let jVarLocalStorageKey = "Items";
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        console.log("jVarLocalCurrentTargetLL",jVarLocalCurrentTarget);
        console.log("value",jVarLocalCurrentTarget.value);
        let jVarLocalClosestTab = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalRate = jVarLocalClosestTab.querySelector(".RateClass");
        console.log("jVarLocalRatejVarLocalRate::",jVarLocalRate);

        let jVarLocalItemPk = parseInt(jVarLocalCurrentTarget.value);
        console.log("jVarLocalItemPk::",jVarLocalItemPk);

        let jVarLocalItems = StartFuncFromLocalStorage({ inLocalStorageKey: jVarLocalStorageKey });
        console.log("jVarLocalItems::",Object.values(jVarLocalItems));

        let jVarLocalFind = Object.values(jVarLocalItems).find(element => element.pk === jVarLocalItemPk);

        jVarLocalRate.value = jVarLocalFind.DryWashRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };