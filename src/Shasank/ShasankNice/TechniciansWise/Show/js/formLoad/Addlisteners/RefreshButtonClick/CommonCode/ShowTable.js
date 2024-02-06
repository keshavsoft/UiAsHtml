const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTicketsData = localStorage.getItem("TicketsData");
    let jVarLocalTicketsDataParsed = JSON.parse(jVarLocalTicketsData);

    let jVarLocalTechniciansData = localStorage.getItem("TechniciansData");
    let jVarLocalTechniciansDataParsed = JSON.parse(jVarLocalTechniciansData);

    let JVarLocalFilterUnAssinData = JFLocalUnAssingnData({ inTicketsData: jVarLocalTicketsDataParsed, inTechniciansData: jVarLocalTechniciansDataParsed });

    if (JVarLocalFilterUnAssinData.length === 0) {
        Swal.fire({
            title: "No data found?",
            icon: "question"
        });
    };

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        // columns: JFLocalColumns(),
        data: JVarLocalFilterUnAssinData
    });
};

const JFLocalUnAssingnData = ({ inTicketsData, inTechniciansData }) => {
    let jVarLocalTechniciansData = inTechniciansData.map(element => {

        let JvarLocalTotalAssign = inTicketsData.filter(ele => {
            if (ele.Engineer == element.TechnicianName) {
                return ele;
            };
        });

        let JvarLocalTotalPending = inTicketsData.filter(ele => {
            if (ele.Engineer == element.TechnicianName) {
                if (ele.InternalStatus === "Allocated") {
                    return ele;
                };
               
            };
        });

        let JvarLocalTotalComplate = inTicketsData.filter(ele => {
            if (ele.Engineer == element.TechnicianName) {
                if (ele.InternalStatus === "Complated") {
                    return ele;
                };
               
            };
        });

        element.TotalStatus = JvarLocalTotalAssign.length
        element.TotalPendingStatus = JvarLocalTotalPending.length
        element.TotalComplateStatus = JvarLocalTotalComplate.length

        return element;
    });
    return jVarLocalTechniciansData;

};


export { StartFunc };