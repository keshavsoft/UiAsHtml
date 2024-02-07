let CommonProjectName = "Garments";

let LocalFolderPath = `src\\${CommonProjectName}`;
let LocalDestinationPath = `public\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };