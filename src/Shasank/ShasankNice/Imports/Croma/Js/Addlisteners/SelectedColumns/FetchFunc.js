let StartFunc = async ({ inBodyData }) => {

    // let jVarLocalFetchUrl = `/api/Tickets/Upload`;
    let jVarLocalFetchUrl = `/bin/Tickets/UploadFromModal`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    });
    console.log('1111111111 : ', jVarFromFetch);
    return await jVarFromFetch;
    let data = await jVarFromFetch.json();
    console.log('22222222222 : ', data);
    return await data;
};


export { StartFunc };
