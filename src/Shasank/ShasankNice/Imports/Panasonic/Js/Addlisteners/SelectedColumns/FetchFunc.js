let StartFunc = async ({ inBodyData }) => {
    let jVarLocalFetchUrl = `/bin/Tickets/UploadFromModal`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    });

    return await jVarFromFetch;
};


export { StartFunc };