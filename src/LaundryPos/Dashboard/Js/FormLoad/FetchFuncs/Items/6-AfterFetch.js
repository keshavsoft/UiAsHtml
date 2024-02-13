let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        localStorage.setItem("Items", JSON.stringify(data));
    };
};

export { StartFunc };