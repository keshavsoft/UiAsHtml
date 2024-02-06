import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    Promise.all([
        fetch(`/${LocalroutePath}/${LocaltableName}`).then(value => value.json()),
        fetch(`/${LocalroutePath}/Technicians`).then(value => value.json())
    ])
        .then((value) => {
            localStorage.setItem("TicketsData", JSON.stringify(value[0]));
            localStorage.setItem("TechniciansData", JSON.stringify(value[1]));

            //json response
        })
        .catch((err) => {
            console.log(err);
        });

    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}`;
    // let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

};

export { StartFunc };