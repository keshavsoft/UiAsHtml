let StartFunc = async ({ inFromfetch }) => {
  let LocalFromfetch = inFromfetch;
  let localuserNameId = document.getElementById("yourUsername");
  let locallocaluserNameId = localuserNameId.value;

  if (LocalFromfetch.status !== 200) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${LocalFromfetch.statusText}`,
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    let data = await LocalFromfetch.json();
    console.log(data);
  }
  if (LocalFromfetch.status === 200) {
    // window.location.href = `/JsonCRUD/Custom/ShasankNice/EngineerAdmin/OutSide/MobileFromTecnician/MobileFromTecnician.html?Engineer=${locallocaluserNameId}`;
    window.location.href = `/JsonCRUD/Custom/ShasankNice/ForTechnician/Index.html?Engineer=${locallocaluserNameId}`;
    console.log(data);
  }
  // window.location.href = "../../Table/table.html";
};

export { StartFunc };
