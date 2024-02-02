let CommonProjectName = "ShasankNice";

let LocalFolderPath = `src\\Shasank\\${CommonProjectName}`;
let LocalDestinationPath = `public\\Shasank\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

