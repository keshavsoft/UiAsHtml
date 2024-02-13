let StartFunc = ({ inFromFetch }) => {
    console.log("abc",inFromFetch);
    if (inFromFetch.status === 500) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Internal Server Error!',
        });
    }
     else {
        // window.location.href = "/JsonCRUD/Custom/ShasankNice/Tables/All/All.html";
    }
};

export { StartFunc };
