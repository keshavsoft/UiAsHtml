let StartFunc = async () => {

    let jVarLocalFetchUrl = `/binWithFolder/Masters/Items/DataOnly`;
    
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };