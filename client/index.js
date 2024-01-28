console.log("hi");
document.addEventListener("DOMContentLoaded", function () {
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");
  console.log("hi");
  let tableHtml = "";
  if (data.length === 0) {
    table.innerHTML = '<tr><td class="no_data" colspan=5>No Data</td></tr>';
  }
}
