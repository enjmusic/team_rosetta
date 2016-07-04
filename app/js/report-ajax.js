var toTable = function(data) {
    var tableHtml = "";
    if (data.length > 0) {
        // Open table
        tableHtml += "<table>";

        // Get attributes of first item for column labels
        tableHtml += "<tr>";
        var labels = Object.keys( data[0] );
        for (var i = 0; i < labels.length; i++) {
            tableHtml += "<td>" + labels[i] + "</td>";
        }
        tableHtml += "</tr>";

        // Fill columns with each item's attributes
        for (var i = 0; i < data.length; i++) {
            tableHtml += "<tr>";
            for (var property in data[i]) {
                tableHtml += "<td>" + data[i][property] + "</td>";
            }
            tableHtml += "</tr>";
        }

        // Close table
        tableHtml += "</table>";
    }

    return tableHtml;
}

$( document ).ready( function () {
    $.ajax({
        url: "/report-raw",
        method: "get",
        dataType: "json",
        success: function(data) {
            $("#dump").html(toTable(data));
        },
        failure: function() {
            alert("Request timed out or failed.");
        },
        timeout: 3000
    });
});


