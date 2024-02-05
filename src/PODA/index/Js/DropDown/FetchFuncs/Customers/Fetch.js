import ConfigJson from './Config.json' assert {type: 'json'};

const StartFunc = async () => {

    let ResponseData = await fetch(`/${ConfigJson.routePath}/${ConfigJson.tableName}`);
    let LocaResJsonData = await ResponseData.json();
    console.log("LocaResJsonData:", LocaResJsonData);


};

export { StartFunc };