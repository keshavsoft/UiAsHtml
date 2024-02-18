let StartFunc = async ({ inFromFetch }) => {
    let LocalFromfetch = inFromFetch;

    if (LocalFromfetch.status === 500) {
        let data = await LocalFromfetch.json();
        console.log("data : ", data);
        Swal.fire({
            title: "500 Internal Server Error",
            text: data.ErrorFrom,
            icon: "error"
          });
    };
    
    if (LocalFromfetch.status === 405) {
        let data = await LocalFromfetch.text();
        console.log("data : ", data);
        Swal.fire("SweetAlert2 is working!");
    };
    // console.log("aaaaaaaaaaa : ", inFromFetch);
    // let timerInterval;
    // Swal.fire({
    //     title: `Sucessfully Saved <h2>${inFromFetch.length}</h2>`,
    //     html: "Inserting.. <b></b> milliseconds.",
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //         Swal.showLoading();
    //         const timer = Swal.getPopup().querySelector("b");
    //         timerInterval = setInterval(() => {
    //             timer.textContent = `${Swal.getTimerLeft()}`;
    //         }, 100);
    //     },
    //     willClose: () => {
    //         clearInterval(timerInterval);
    //     }
    // }).then((result) => {
    //     /* Read more about handling dismissals below */
    //     window.location.href = "/JsonCRUD/Custom/ShasankNice/Tables/All/All.html";
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //         console.log("I was closed by the timer");
    //     }
    // });
};



export { StartFunc };