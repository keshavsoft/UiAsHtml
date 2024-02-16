let StartFunc = async ({ inFromfetch }) => {
  let LocalFromfetch = inFromfetch;
  // console.log("LocalFromfetch : ", LocalFromfetch);
  if (LocalFromfetch.status === 500) {
    let data = await LocalFromfetch.json();
  };

  window.location.href = "../Show/Show.html";
  //window.location.href = "/JsonCRUD/Custom/ShasankNice/Users/Show/Show.html";
  // window.location.href = "";
};

export { StartFunc };
